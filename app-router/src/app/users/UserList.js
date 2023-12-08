import Link from 'next/link';

const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch data');
  const users = await response.json();
  console.log(users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;