import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
  const { currentPageRef, nextPage, previousPage, usersList } = useUsers();

  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <button onClick={previousPage} style={{ marginTop: 0 }}>
          Previous
        </button>
        <span>{currentPageRef.current}</span>
        <button onClick={nextPage} style={{ marginTop: 0 }}>
          Next
        </button>
      </div>
    </>
  );
};
