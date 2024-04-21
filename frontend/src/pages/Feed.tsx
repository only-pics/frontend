import { users, eu } from "../utils/mockDB";
import { AvatarFeed } from "@/components/AvatarFeed";
import { MyAvatarFeed } from "@/components/MyAvatarFeed";
import { Card } from "@/components/Card";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function Feed() {
  // const params = useParams();
  // const id = params.id || "";
  // const [user, setUser] = useState<any>({});

  // const getUser = async () => {
  //   try {
  //     setUser(users[Number(id) - 1]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

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
        {users.map((user) => {
          return (
            <div className="mx-3 my-3 ">
              <Card
                id={user.id}
                post={user.post[0]}
                username={user.name}
                avatar={user.avatar}
                text={user.post[0].text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
