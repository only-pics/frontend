// import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

export default function Layout({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {

    return (
        <div className='w-[100vw] h-[100vh] flex flex-col overflow-x-hidden'>
            <Header
                connectWallet={connectWallet}
                account={account}
                signer={signer}
            />
            <main className=''>
                <Outlet/>
            </main>
            <Toaster />
        </div>
    )
}