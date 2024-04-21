import { AvatarPost } from "./AvatarPost";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { Clock, CircleDollarSign } from 'lucide-react';

export function Card({
  userId,
  userName,
  wallet,
  postId,
  postImg,
  description,
  likes,
  funded,
  bettors,
}: {
  userId: string;
  userName: string;
  wallet: string;
  postId: string;
  postImg: string;
  description: string;
  likes: string[];
  funded: number;
  bettors: object[];
}) {
  const history = useNavigate();

  return (
    <div className="w-full h-full rounded-3xl items-start justify-center p-4">
      <div className="border rounded-lg p-4 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div onClick={() => history(`/profile/${userId}`)} className="mb-2">
            <AvatarPost avatar={postImg} username={userName} />
          </div>
          <button className="flex flex-row bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded-lg">
            <WhatshotIcon />
            {/* <p>{post.hot}</p> */}
          </button>
        </div>
        <p className="ml-3 mb-3 font-bold text-foreground">- {description}</p>
        <div className="relative bg-primary rounded-3xl cursor-pointer">
          <img
            src={postImg}
            alt=""
            className="w-full rounded-xl object-contain"
          />
          <div className="absolute top-1 right-1 lg:top-5 lg:right-5 text-white">
            <div className="bg-secondary px-2 py-2 rounded-lg flex items-center text-sm gap-2">
              <Clock color="hsl(var(--foreground))" />
              <p><span className="hidden lg:inline">Time left:</span> 3min</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 rounded-b-3xl flex items-center justify-between">
            <div className="flex flex-row space-x-3 ml-3">
              <div className="flex items-center space-x-1 text-white">
                <CommentIcon />
                {/* <p className="font-">{post.comments}</p> */}
              </div>
              <div className="flex items-center space-x-1 text-white">
                <FavoriteIcon />
                <p>{likes.length}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-lg px-2 py-1 flex items-center mr-1 lg:mr-5 gap-2 brightness-95 hover:brightness-110 transition">
              <CircleDollarSign />
              <p><span className="hidden lg:inline">Current bid:</span> 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
