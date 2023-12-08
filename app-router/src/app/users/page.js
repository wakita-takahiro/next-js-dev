import { Suspense } from 'react';
import UserList from './UserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export const metadata = {
  title: 'ユーザの一覧ページ',
  description: 'JSONPlaceHolderから取得したユーザ一覧です。',
};

export default Page;