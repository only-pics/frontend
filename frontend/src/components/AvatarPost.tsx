export function AvatarPost({
  avatar,
  username,
}: {
  avatar: any;
  username: string;
}) {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[4rem] h-[4rem] relative cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="rounded-full w-full h-full object-cover border-8 border-white "
        />
      </div>
      <div className="flex flex-col">
        <p className="text-black ml-3 font-bold text-base cursor-pointer hover:underline">
          {username}
        </p>
        <p className="text-gray-500 ml-3 font-bold text-base">
          @{username.toLowerCase().split(" ")[0]}_
          {username.toLowerCase().split(" ")[1]}
        </p>
      </div>
    </div>
  );
}
