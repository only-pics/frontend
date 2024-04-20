import { AvatarPost } from "./AvatarPost";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

export function Card({
  id,
  post,
  avatar,
  username,
  text,
}: {
  id: number;
  post: any;
  avatar: any;
  username: any;
  text: string;
}) {
  const history = useNavigate();

  return (
    <div className="w-full h-full bg-gradient2 rounded-3xl items-start justify-center p-4 scale-up-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-start">
          <div onClick={() => history(`/profile/${id}`)} className="mb-2">
            <AvatarPost avatar={avatar} username={username} />
          </div>
          <button className="flex flex-row bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded-lg">
            <WhatshotIcon />
            <p>{post.hot}</p>
          </button>
        </div>
        <p className="ml-3 mb-3 font-bold text-black">- {text}</p>
        <div className="relative border-4 border-white bg-primary rounded-3xl cursor-pointer">
          <img
            src={post.photo}
            alt=""
            className="w-full rounded-3xl object-contain"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 rounded-b-3xl flex items-center justify-between">
            <div className="flex flex-row space-x-3 ml-3">
              <div className="flex items-center space-x-1 text-white">
                <CommentIcon />
                <p className="font-">{post.comments}</p>
              </div>
              <div className="flex items-center space-x-1 text-white">
                <FavoriteIcon />
                <p>{post.likes}</p>
              </div>
            </div>
            <div className="flex justify-end mr-3 space-x-3 text-white">
              <SendIcon />
              <DownloadIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
