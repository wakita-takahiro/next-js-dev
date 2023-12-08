import Link from 'next/link';
import Modal from '../modal';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        User
      </Link>
      <h1 className="text-2xl">About</h1>
      <Modal />
    </div>
  );
};

export default Page;