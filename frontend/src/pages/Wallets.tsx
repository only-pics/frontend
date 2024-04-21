import Network from "@/components/Network";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import { networkImages } from "@/utils/mockDB";
import { useState } from "react";

export default function Wallets() {
  const [network, setNetwork] = useState<string>("network0");
  function handleNetworkChange(event: any) {
    setNetwork(event.target.value);
  }
  return (
    <div className="flex flex-col lg:my-16 mb-16 w-[100vw] bg-background items-center justify-center outline-none">
      <div className="mt-6 flex flex-row justify-start text-foreground">
        <LooksOneIcon />
        <h1 className="ml-1 text-foreground text-base font-bold">
          Select a Network
        </h1>
      </div>
      <div className="mt-4 flex flex-row w-full flex-wrap justify-center space-x-2">
        <form className="flex flex-wrap space-x-2">
          {networkImages.map((networkImage, index) => {
            return (
              <div>
                <input
                  type="radio"
                  id={"network" + index}
                  name="qualquerUm"
                  className="hidden"
                  value={"network" + index}
                  checked={network == "network" + index}
                  onChange={handleNetworkChange}
                ></input>
                <label htmlFor={"network" + index}>
                  <Network
                    networkImage={networkImage}
                    selected={network == "network" + index ? true : false}
                  />
                </label>
              </div>
            );
          })}
        </form>
      </div>
      <div className="mt-6 flex flex-row justify-start text-foreground">
        <LooksTwoIcon />
        <h1 className="ml-1 text-foreground text-base font-bold">
          Link Your Wallet
        </h1>
      </div>
      <button className="mt-3 bg-foreground text-background font-bold px-3 py-1 rounded-full">
        Connect Wallet
      </button>
      <div className="mt-6 flex flex-row justify-start text-foreground">
        <Looks3Icon />
        <h1 className="ml-1 text-foreground text-base font-bold">
          Verify Ownership
        </h1>
      </div>
      <button className="mt-3 bg-foreground text-background font-bold px-3 py-1 rounded-full">
        Sign Message
      </button>
    </div>
  );
}
