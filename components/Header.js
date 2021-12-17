import { ByMoralis } from 'react-moralis';
import { LogoutIcon } from '@heroicons/react/outline';
import { useMoralis } from 'react-moralis';

function Header() {
    const { logout } = useMoralis();

    return (
        <div className='bg-white sticky top-0 z-50 border-b border-gray-100 shadow-md w-full py-2'>
            <div className='flex px-2 justify-between items-center justify-center'>
                <div className='h-10 w-10 rounded-full bg-gray-700 text-center flex items-center justify-center'>
                    <p className='text-white'>J</p>
                </div>
                <ByMoralis variant='dark' style={{ height:'40px', margin:'0' }} />
                <button onClick={logout} className='bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full'>
                    <LogoutIcon 
                        className='h-5'
                    />
                </button>
            </div>
        </div>
    )
}

export default Header
