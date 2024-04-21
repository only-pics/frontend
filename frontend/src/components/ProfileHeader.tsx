import { MoveLeft } from 'lucide-react';
import { Settings } from 'lucide-react';

export default function ProfileHeader({username} : {username: string}) {
    return (
        <header className='lg:invisible'>
            <div className='w-[100vw] py-2 px-6 grid grid-cols-[1fr_8fr_1fr]'>
                <MoveLeft className='my-auto mx-auto' color='hsl(var(--foreground))'/>
                <p className='text-xl text-center font-bold my-auto'>{username}</p>
                <Settings className='w-[3rem]' />
            </div>
        </header>
    )
}