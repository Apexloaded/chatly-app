import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Chatly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
