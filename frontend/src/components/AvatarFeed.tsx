export function AvatarFeed({
  avatar,
  username,
}: {
  avatar: any;
  username: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[4.5rem] h-[4.5rem] relative border-gradient1 cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <p className="text-foreground mt-2 font-bold text-base">{username}</p>
    </div>
  );
}
