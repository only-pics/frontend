import OnlyPicLogo from '../assets/only_pictures.png';
import { X } from 'lucide-react';

export default function ProfileHeader() {
    return (
        <header className='lg:hidden'>
            <div className='w-[100vw] py-2 px-6 grid grid-cols-[1fr_8fr_1fr]'>
                <X className='my-auto mx-auto' color='hsl(var(--foreground))'/>
                <p className='text-xl text-center font-bold my-auto'>New post</p>
                <p className='text-base text-center text-primary my-auto'>Next</p>
            </div>
        </header>
    )
}