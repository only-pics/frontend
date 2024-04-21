import AddCircleIcon from "@mui/icons-material/AddCircle";

export function MyAvatarFeed({ avatar }: { avatar: any }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[4.5rem] h-[4.5rem] relative border-gradient1 cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
        <div className="absolute -bottom-1 -right-4 cursor-pointer">
          <AddCircleIcon
            style={{
              color: "#FF00FF",
              fontSize: 32,
            }}
          />
        </div>
      </div>
      <p className="text-foreground mt-2 font-bold text-base drop-shadow-lg">
        You
      </p>
    </div>
  );
}
