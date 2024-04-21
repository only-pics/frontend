export default function Network({
  networkImage,
  selected,
}: {
  networkImage: any;
  selected: boolean;
}) {
  return (
    <div className="cursor-pointer">
      <img
        src={networkImage}
        className={`w-[7rem] h-[7rem] rounded-full object-cover ${
          selected ? "border-2 border-gradient1" : "border-2 border-foreground"
        }`}
      />
    </div>
  );
}
