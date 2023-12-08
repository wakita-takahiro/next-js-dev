// const Page = async ({ params }) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const user = await response.json();

//   return (
//     <div className="m-4">
//       <h1 className="text-lg font-bold">ユーザ詳細</h1>
//       <p>ID: {user.id}</p>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default Page;



import  { Metadata } from 'next';

async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
}

export async function generateMetadata({ params }) {
  const user = await getUser(params.id);
  return { title: user.name };
}

const Page = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ詳細</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Page;