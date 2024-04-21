import { useNavigate } from 'react-router-dom';
import Logo from '../assets/only_pictures.png';

export default function SignUp({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {
    
    const navigator = useNavigate();
    
    return (
        <div className='p-24 flex flex-col items-center'>
            <div className='lg:w-[30vw] w-full'>
                <div className='flex h-28 items-center justify-center   '>
                    <img className="h-[100%] py-2" src={Logo} alt=""/>
                    <p className="text-3xl font-bold text-primary mx-2">Only Pictures</p>
                </div>
                <p className='text-center lg:text-left mt-10 text-3xl font-bold'>Join the most interactive <br />social network</p>
                
                <div className='flex flex-col gap-2 mt-8'>
                    <label htmlFor="username">
                        <p className='text-xl font-bold'>Username</p>
                    </label>
                    <input className='bg-secondary rounded-xl p-2' type="text" id='username'/>
                </div>
                <div className='mt-8 flex w-full justify-center'>
                    <button className='bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-xl py-2 px-6 hidden lg:inline' onClick={() => navigator('/wallets')}>Connect Wallet</button>
                    <button className='bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-xl py-2 px-6 lg:hidden' onClick={connectWallet}>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}