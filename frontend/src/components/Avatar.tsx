export function Avatar({ avatar }: { avatar: any }) {
  return (
    <div className="w-[9rem] ">
      <img
        src={avatar}
        alt=""
        className="w-full rounded-full border-[1.1rem] border-white"
      />
    </div>
  );
}
