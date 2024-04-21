import { users, eu } from "../utils/mockDB";
import { AvatarFeed } from "@/components/AvatarFeed";
import { MyAvatarFeed } from "@/components/MyAvatarFeed";
import { Card } from "@/components/Card";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { set } from "firebase/database";

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
    <div className="flex flex-col lg:my-16 mb-16 w-[100vw] items-center justify-center outline-none">
      <div className="flex items-center w-[50%] min-w-96 h-full bg-background overflow-x-auto scale-up-center">
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
      <div className="flex flex-col items-center min-w-96 w-[50%] bg-background">
        {postsData.map((post: any, index: number) => {
          return (
            <div className="mx-3 my-3 ">
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