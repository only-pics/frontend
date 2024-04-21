export function AvatarFeed({
  avatar,
  username,
}: {
  avatar: any;
  username: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[3.5rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem] relative cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="rounded-full w-full h-full border-gradient1 border-4 object-cover"
        />
      </div>
      <p className="text-foreground mt-2 font-bold text-base">{username}</p>
    </div>
  );
}
