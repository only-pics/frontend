import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import NavButton from "./NavButton";
import { ModeToggle } from "./mode-toggle";
// import LogoApp from '../assets/whale_logo_green.png';
import { useTheme } from "@/components/theme-provider";
import { menuOptions } from "../utils/menu";

export function Header() {

    const { theme } = useTheme();

    const navigator = useNavigate();

    return (
        <div className="duration-600 sticky w-full bg-red-600 top-0 z-20">
            <div className="w-full bg-transparent flex flex-row justify-center items-center px-12 h-14">
                {/* <img className="cursor-pointer h-[100%] py-2" src={LogoApp} alt="Whale Finance" onClick={() => navigator('/')}/> */}
                <p className="cursor-pointer text-primary mx-2" onClick={() => navigator('/')}>Whale LABS</p>
                <div className="flex-1 flex flex-row h-[100%] justify-center items-center">
                    <Button variant="ghost" className="h-[100%] w-24 relative glow-bottom-border hover:bg-transparent group" onClick={() => navigator('/')}><p className="group-hover:text-primary group-hover:text-shadow-primary-glow">Home</p></Button>
                    {menuOptions.map((option, index) => (
                        <NavButton key={index} to={option.to}>{option.name}</NavButton>
                    ))}
                </div>
                <div className="h-[100%] flex flex-row justify-center items-center">
                    <div className="flex flex-col items-center mx-6 h-[100%]">
                        <ModeToggle/>
                    </div> 
                    <div className={`flex flex-col items-center ${theme == "light" ? 'bg-gray-400' : ''} `}>
                        CONNECT
                    </div>
                </div>           
            </div>
        </div>
    )
}