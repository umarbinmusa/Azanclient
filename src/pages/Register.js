import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

// GraphQL Mutation
const PHAMACY_SIGNUP = gql`
  mutation Signup($username: String!, $password: String!, $role: String!) {
    signup(username: $username, password: $password, role: $role) {
      token
      user {
        id
        username
        role
      }
    }
  }
`;

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const [signupUser, { loading }] = useMutation(PHAMACY_SIGNUP);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupUser({ variables: { username, password, role } });

      if (data.signup.token) {
        setMessage("✅ Signup successful! Redirecting...");
        localStorage.setItem("token", data.signup.token); // Store JWT
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage("⚠️ Signup failed. Try again.");
      }
    } catch (err) {
      setMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#90D5FF]">
      <div className="flex min-h-screen">
        <div className="flex-[3] flex-shrink flex items-center justify-center">
          <img src="./images/signup.png" alt="Signup" className="m-10" />
        </div>
        <div className="flex-[2] flex-shrink flex flex-col bg-white m-30 p-10 rounded-l-xl items-start ml-80 justify-center">
          <div className="mb-7">
            <h2 className="font-bold text-xl">Signup</h2>
          </div>

          {message && <p className="mb-4 text-center text-sm">{message}</p>}

          <form onSubmit={handleSignup} className="w-4/5 flex flex-col gap-5">
            <div className="w-full">
              <label htmlFor="username" className="block">Username</label>
              <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="block">Password</label>
              <input type="password" id="password" className="w-full border px-4 py-2 rounded"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="w-full">
              <label htmlFor="role" className="block">Role</label>
              <select id="role" className="w-full border px-4 py-2 rounded"
                value={role} onChange={(e) => setRole(e.target.value)} required>
              
                <option value="ADMIN">Admin</option>
                <option value="CASHIER">Cashier</option>
                <option value="PHARMACIST">Pharmacy</option>
              </select>
            </div>

            <div>
              <button type="submit" className="w-full bg-[#90D5FF] text-black px-4 py-2 rounded"
                disabled={loading}>
                {loading ? "Signing up..." : "Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
