import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Messages from '../components/Messages';
import Header from '../components/Header';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />;

  return (
    <div className="bg-red max-w-2xl h-screen mx-auto">
      <Head>
        <title>Chatly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex-1 justify-between border-r h-screen flex flex-col border-l'>
        <Header />
        <Messages />
      </div>
    </div>
  )
}
