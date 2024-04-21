import { AvatarPost } from "./AvatarPost";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { Clock, CircleDollarSign } from 'lucide-react';
import { HeartBit, SupportedChain } from "@fileverse/heartbit-react";
import { SiweMessage } from 'siwe'
import BidBtn from "./BidBtn";
import { keccak256, toUtf8Bytes } from "ethers/lib/utils";
import { useToast } from "@/components/ui/use-toast"

export function Card({
  provider,
  account,
  signer,
  userId,
  userName,
  userImg,
  userBio,
  wallet,
  postId,
  postImg,
  description,
  likes,
  funded,
  bettors,
}: {
  provider: any;
  account: string | null;
  signer: any;
  userId: string;
  userName: string;
  userImg: string;
  userBio: string;
  wallet: string;
  postId: string;
  postImg: string;
  description: string;
  likes: string[];
  funded: number;
  bettors: object[];
}) {

  const history = useNavigate();

  const { toast } = useToast()

  const coreOptions = {
    chain: "0xaa36a7" as SupportedChain
  }

  const getSignatureArgsHook = async () => {
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
      statement: "Hello World!",
      uri: window.location.origin,
      version: "1",
    });

    const message = siweMessage.prepareMessage();
    const signature = await signer.signMessage(message);

    return {
      message,
      signature,
      onMintCallback: () => {
        console.log("Minted!")
      }
    };
  };

  const hash = keccak256(toUtf8Bytes("window.location.href"));

  return (
    <div className="w-full h-full rounded-3xl items-start justify-center p-4">
      <div className="border rounded-lg p-4 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div onClick={() => history(`/profile/${userId}`)} className="mb-2">
            <AvatarPost avatar={userImg} username={userName} />
          </div>
        </div>
        <p className="ml-3 mb-3 font-bold text-foreground">- {description}</p>
        <div className="relative bg-primary rounded-3xl cursor-pointer overflow-hidden">
          <img
            src={postImg}
            alt=""
            className="rounded-xl w-full aspect-square"
          />
          <div className="absolute top-1 right-1 lg:top-5 lg:right-5 text-white">
            <div className="bg-secondary px-2 py-2 rounded-lg flex items-center text-sm gap-2">
              <Clock color="hsl(var(--foreground))" />
              <p><span className="hidden lg:inline">Time left:</span> 3min</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 rounded-b-xl flex items-center justify-between">
            <div className="flex flex-row space-x-3 ml-3">
              <div className="flex items-center space-x-1 text-white">
                <CommentIcon />
                {/* <p className="font-">{post.comments}</p> */}
              </div>
              <div className="flex items-center space-x-1 text-white">
                <HeartBit
                  coreOptions={coreOptions}
                  getSignatureArgsHook={getSignatureArgsHook}
                  hash={hash}
                />
                <p>{likes.length}</p>
              </div>
            </div>
            {/* <div className="bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-lg px-2 py-1 flex items-center mr-1 lg:mr-5 gap-2 brightness-95 hover:brightness-110 transition">
              <CircleDollarSign />
              <p><span className="hidden lg:inline">Current bid:</span> 100</p>
            </div> */}
            <BidBtn userId={"user ID here"} bidAmount={777} postId={postId} wallet={"userWalletHere"} />
          </div>
        </div>
      </div>
    </div>
  );
}
