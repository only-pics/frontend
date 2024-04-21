export function AvatarFeed({
  avatar,
  username,
}: {
  avatar: any;
  username: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[5.5rem] h-[5.5rem] relative border-gradient1 cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="rounded-full w-full h-full object-cover border-4 border-white"
        />
      </div>
      <p className="text-foreground mt-2 font-bold text-base">{username}</p>
    </div>
  );
}
