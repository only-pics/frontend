import { useHeartBit } from "@fileverse/heartbit-react"
import { useEffect, useState } from "react"
import { SiweMessage } from "siwe";
import { toast, useToast } from "./ui/use-toast";
import { keccak256, toUtf8Bytes } from "ethers/lib/utils";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CustomHeartBit = ({ 
        provider,
        account,
        signer
    } : { 
        provider: any; 
        account: string | null; 
        signer: any;
    }) => {

    const { toast } = useToast()

    const hash = keccak256(toUtf8Bytes("window.location.href"));

    const { mintHeartBit, getTotalHeartMintsByUser, getTotalHeartBitByHash } = useHeartBit()
    const [startTime, setStartTime] = useState<number | null>(null)

    useEffect(() => {
        const fetchBalances = async () => {

        const signer = await provider.getSigner()
        const address = await signer.getAddress();

        const totalMintsByHash = await getTotalHeartBitByHash({ hash }); // Total Supply for a hash
        //@ts-ignore
        const totalMintsByUser = await getTotalHeartMintsByUser({ address, hash }); // Total mints for a user by hash

        console.log({ totalMintsByHash, totalMintsByUser})
        }
        fetchBalances()
    }, []);
    
    const onMouseDown = () => {
        setStartTime(Math.floor(Date.now() / 1000))
    }
    
    const onMouseUp = async () => {
        const endTime = Math.floor(Date.now() / 1000);
    
        if (!provider) {
            toast({
            title: "Connect Wallet",
            description: "Please connect your wallet to like this post!",
            })
        }
    
        const signer = await provider.getSigner()
        const address = await signer.getAddress();
    
        const siweMessage = new SiweMessage({
            domain: window.location.host,
            address,
            statement: "You are liking this post!",
            uri: window.location.origin,
            version: "1",
        });
    
        const message = siweMessage.prepareMessage();
        const signature = await signer.signMessage(message);
    
        await mintHeartBit({
            startTime: startTime!,
            endTime,
            hash, // This is an identifier for the token, if this hash changes you mint a new token in that case
            message, // raw message that was signed
            signature, // signed message
        })
    }

    return <FavoriteIcon onMouseUp={onMouseUp} onMouseDown={onMouseDown} className="text-primary animate-pulse" fontSize="large"/>
}