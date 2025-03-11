import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom"; 

// Define LOGIN mutation
const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        role
      }
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Use the mutation
  const [loginUser, { loading }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message
  
    try {
      console.log("Attempting login with:", username, password); // Debugging log
  
      const { data } = await loginUser({ variables: { username, password } });
  
      console.log("GraphQL response:", data); // Check if data is returned
  
      if (data?.login?.token) {
        console.log("Login successful! Token:", data.login.token);
  
        localStorage.setItem("token", data.login.token);
  
        const userRole = data.login.user.role;
        console.log("User role:", userRole);
  
        setMessage("✅ Login successful! Redirecting...");
  
        setTimeout(() => {
          if (userRole === "ADMIN") navigate("/dashbord");
          else if (userRole === "CASHIER") navigate("/Receipt");
          else if (userRole === "PHARMACIST") navigate("/Dash");
          else setMessage("⚠️ Unauthorized role.");
        }, 2000);
      } else {
        console.log("Invalid login response:", data);
        setMessage("⚠️ Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("❌ An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#90D5FF]">
      <div className="flex min-h-screen">
        <div className="flex-[3] flex-shrink flex items-center justify-center">
          <img src="./images/ambulance.png" alt="" className="m-10" />
        </div>
        <div className="flex-[2] flex-shrink flex flex-col bg-white m-30 p-10 rounded-l-xl items-start ml-80 justify-center">
          <div className="mb-7">
            <h1 className="font-bold text-2xl">Pharmacy</h1>
            <h2 className="font-bold text-xl">Login</h2>
          </div>

          {message && <p className="mb-4 text-center text-sm">{message}</p>} 

          <form onSubmit={handleLogin} className="w-4/5 flex flex-col gap-5">
            <div className="w-full">
              <label htmlFor="username" className="block">Username</label>
              <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="block">Password</label>
              <input type="password" id="password" className="w-full border px-4 py-2 rounded"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
              <button type="submit" className="w-full bg-[#90D5FF] text-black px-4 py-2 rounded"
                disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
