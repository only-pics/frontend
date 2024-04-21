import { users, eu } from "../utils/mockDB";
import { AvatarFeed } from "@/components/AvatarFeed";
import { MyAvatarFeed } from "@/components/MyAvatarFeed";
import { Card } from "@/components/Card";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Feed() {

  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend-only-pics.vercel.app/api");
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setPostsData(data);
          console.log(data);
        } else {
          console.error("Something went wrong");
          // throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:my-16 mb-16 w-[100vw] items-center outline-none">
      <div className="flex items-center w-full h-full bg-background justify-start overflow-x-auto lg:w-[60vw]">
        <div className="mx-3 my-3">
          <MyAvatarFeed avatar={eu.avatar} />
        </div>
        {users.map((user) => {
          return (
            <div className="mx-3 my-3">
              <AvatarFeed
                avatar={user.avatar}
                username={user.name.split(" ")[0]}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full items-center bg-background lg:w-[60vw]">
        {postsData.map((post: any, index: number) => {
          return (
            <div className="w-full">
              <Card
                key={index}
                userId={post.userId}
                userName={post.userName}
                wallet={post.wallet}
                postId={post.postId}
                postImg={post.postImg}
                description={post.description}
                likes={post.likes}
                funded={post.funded}
                bettors={post.bettors}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}