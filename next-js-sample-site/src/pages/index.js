import Image from 'next/image';
import Head from 'next/head';
// import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <ul>
        <li>
          <Link href={{
            pathname: '/about',
            query: { name: 'test' },
          }}>
            about
          </Link>
          <Link href="/about">
            about
          </Link>
        </li>
      </ul> */}
      <Head>
        <title>トップページ</title>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
      </Head>
      <h1>Hello Next.js</h1>
      <Image src="/next.svg" alt='' width={500} height={300} />
      <Image src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjY4OTkyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt='' width={500} height={300} />
    </div>
  );
}