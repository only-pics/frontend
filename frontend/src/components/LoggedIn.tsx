import { useNavigate } from 'react-router-dom';
import Logo from '../assets/only_pictures.png';

export default function LoggedIn() {
    const navigator = useNavigate();

    return (
        <div className="p-24 flex flex-col items-center">
            <div className='flex h-28 items-center justify-center   '>
                    <img className="h-[100%] py-2" src={Logo} alt=""/>
                    <p className="text-3xl font-bold text-primary mx-2">Only Pictures</p>
            </div>
            <p className="text-center lg:text-left mt-10 text-3xl font-bold">Go ahead and bid on your favorite post!</p>

            <button className='mt-10 bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-xl py-2 px-6' onClick={() => navigator('/feed')}>See posts</button>
        </div>  
    )
}