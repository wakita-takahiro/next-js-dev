import Link from 'next/link';
import UserList from './users/UserList';

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline">
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <UserList />
    </div>
  );
}