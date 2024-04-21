import img1 from "../assets/imovel1.png";
import img2 from "../assets/imovel2.png";
import img3 from "../assets/imovel3.png";
import img4 from "../assets/imovel4.png";
import img5 from "../assets/imovel5.png";
import avatar from "../assets/avatar.jpg";
import ethereum from "../assets/ethereum.png";
import solana from "../assets/solana.png";
import polygon from "../assets/polygon.png";

export const eu = {
  id: 3,
  name: "John Doe",
  followers: 1000,
  following: 100,
  avatar: avatar,
  post: [{ photo: avatar, likes: 100, comments: 100, hot: 100 }],
};

export const networkImages = [ethereum, solana, polygon];

export const users = [
  {
    id: 4,
    name: "Doe",
    followers: 1000,
    following: 100,
    avatar: img1,
    post: [
      {
        photo: img1,
        likes: 100,
        comments: 100,
        hot: 100,
        text: "senhor deus seno senhor",
      },
    ],
  },
  {
    id: 5,
    name: "John",
    followers: 1000,
    following: 100,
    avatar: img2,
    post: [
      {
        photo: img2,
        likes: 100,
        comments: 100,
        hot: 100,
        text: "senhor deus seno senhor",
      },
    ],
  },
  {
    id: 6,
    name: "Jane Doe",
    followers: 1000,
    following: 100,
    avatar: img3,
    post: [
      {
        photo: img3,
        likes: 100,
        comments: 100,
        hot: 100,
        text: "senhor deus seno senhor",
      },
    ],
  },
  {
    id: 7,
    name: "Jhon Smith",
    followers: 1000,
    following: 100,
    avatar: img4,
    post: [
      {
        photo: img4,
        likes: 100,
        comments: 100,
        hot: 100,
        text: "senhor deus seno senhor",
      },
    ],
  },
  {
    id: 8,
    name: "Pablo",
    followers: 1000,
    following: 100,
    avatar: img5,
    post: [
      {
        photo: img5,
        likes: 100,
        comments: 100,
        hot: 100,
        text: "senhor deus seno senhor",
      },
    ],
  },
];