import LoggedIn from "@/components/LoggedIn";
import SignUp from "@/components/SignUp";

export default function Home({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {

    if(signer) {
       return <LoggedIn />
    } else {
        return <SignUp connectWallet={connectWallet} account={account} signer={signer} />
    }
    
};