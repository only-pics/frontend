export default function Network({
  networkImage,
  selected,
}: {
  networkImage: any;
  selected: boolean;
}) {
  return (
    <div className="hover:bg-black hover:bg-opacity-30 rounded-lg cursor-pointer">
      <img
        src={networkImage}
        className={`w-[7rem] h-[7rem] p-1 rounded-lg object-cover border-2 border-foreground ${
          selected ? "bg-black bg-opacity-30" : ""
        }`}
      />
    </div>
  );
}
