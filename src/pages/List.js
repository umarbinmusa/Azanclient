import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
      role
    }
  }
`;

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Users</h1>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 text-gray-600">ID</th>
            <th className="text-left p-2 text-gray-600">Username</th>
            <th className="text-left p-2 text-gray-600">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.getUsers.map((user) => (
            <tr key={user.id} className="border-t border-gray-200">
              <td className="p-2 text-gray-700">{user.id}</td>
              <td className="p-2 text-gray-700">{user.username}</td>
              <td className="p-2 text-gray-700">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
