import { gql, useMutation } from "@apollo/client";

const SIGNUP_MUTATION = gql`
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

export default SIGNUP_MUTATION;
