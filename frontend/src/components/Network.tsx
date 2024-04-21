export default function Network({
  device,
  networkImage,
  selected,
}: {
  device: string;
  networkImage: any;
  selected: boolean;
}) {

  var size = "w-[2rem] h-[2rem]";

  if(device === "mobile") size = "w-[7rem] h-[7rem]";

  return (
    <div className="cursor-pointer">
      <img
        src={networkImage}
        className={`${size} rounded-full object-cover ${
          device === "desktop" ? "border-2 border-foreground" : (
          selected ? "border-2 border-gradient1" : "border-2 border-foreground"
          )
        }`}
      />
    </div>
  );
}
