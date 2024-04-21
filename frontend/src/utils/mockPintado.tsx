import img1 from '../assets/imovel1.png';
import img2 from '../assets/imovel2.png';
import img3 from '../assets/imovel3.png';
import img4 from '../assets/imovel4.png';
import img5 from '../assets/imovel5.png';
import banner from '../assets/banner.png';
import avatar from '../assets/avatar.jpeg';

export const users = [
    {
        id: 1,
        username: "lucas.fochesatto",
        name: "Lucas",
        followers: 1000,
        following: 100,
        avatar,
        banner,
        description: "I'm a bixo at ITA",
        funded: 10
    },
    {
        id: 2,
        username: "seno.deus",
        name: "Bryan",
        followers: 1321321,
        following: 0,
        avatar,
        banner,
        description: "I'm a GOD at ITA",
        funded: 1000
    },
    {
        id: 4,
        name: "Doe",
        username: 'random',
        followers: 1000,
        following: 100,
        avatar: img1,
        banner,
        funded: 10,
        description: 'OPE',
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
        username: 'random',
        followers: 1000,
        following: 100,
        avatar: img2,
        banner,
        funded: 10,
        description: 'OPE',
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
        username: 'random',
        followers: 1000,
        following: 100,
        avatar: img3,
        banner,
        funded: 10,
        description: 'OPE',
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
        username: 'random',
        followers: 1000,
        following: 100,
        avatar: img4,
        banner,
        funded: 10,
        description: 'OPE',
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
        username: 'random',
        followers: 1000,
        following: 100,
        avatar: img5,
        banner,
        funded: 10,
        description: 'OPE',
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
]

export const images = [
    img1, img2, img3, img4, img5
]