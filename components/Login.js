import Link from 'next/link';
import metamask from '../assets/images/metamask.png';
import walletconnect from '../assets/images/walletconnect.webp';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
    const { authenticate } = useMoralis();

    return (
        <main className='bg-white px-5 dark:bg-black min-h-screen'>
            <div className="h-full flex justify-start flex-col px-5">
                <div className="mt-10">
                    <Link href="/" className="mb-1">
                        <a className='flex justify-center items-center space-x-1'>
                            <p className="font-bold text-green-600 text-3xl">Chatly</p>
                        </a>
                    </Link> 
                    <p className="text-center font-bold text-4xl dark:text-gray-300 m-0">Connect your wallet</p>
                    <p className="font-thin text-center text-lg dark:text-gray-300">Connect with one of our available wallet providers to create an account with chatly?</p>
                </div>
                <div className="mt-10">
                    <div className="mx-auto overflow-hidden w-full md:w-96">
                        <ul>
                            <li onClick={() => authenticate()} className="cursor-pointer bg-green-600 border mb-3 border-gray-300 py-3 px-4 rounded-full flex items-center hover:bg-green-700">
                                <Image src={metamask} className="h-6 w-6" width={30} height={30} alt="metamask"/>
                                <div className="w-full flex justify-center">
                                    <p className="text-xl text-center">
                                        <span className="font-semibold text-white">Sign in with Metamask</span>
                                    </p>
                                </div>
                            </li>
                            <li onClick={() => authenticate({provider: 'walletconnect'})} className="cursor-pointer border mb-3 border-gray-300 py-3 px-4 rounded-full flex items-center hover:bg-gray-100">
                                <Image src={walletconnect} className="h-6 w-6" width={30} height={30} alt="walletconnect"/>
                                <div className="w-full flex justify-center">
                                    <p className="text-xl text-center">
                                        <span className="font-semibold text-black dark:text-white">Wallet Connect</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
