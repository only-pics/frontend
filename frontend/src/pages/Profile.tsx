import { Avatar } from '@/components/Avatar';
import { images, users } from '../utils/mockPintado';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircleDollarSign } from 'lucide-react';
import ProfileHeader from '@/components/ProfileHeader';

export default function Profile() {
    const params = useParams();
    const id = params.id || "";
    
    const [user, setUser] = useState<any>({});

    const getUser = async () =>  {
        try {
            setUser(users[Number(id)-1]);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        const scroll = (event: any) => {
            console.log('scrollY', scrollY)
        };

        window.addEventListener("scroll", scroll);
        // remove event on unmount to prevent a memory leak
        () => window.removeEventListener("scroll", scroll);
    }, []);


    return (
        <div className='w-[100vw]' >
            <div className='w-[full] lg:mx-auto lg:w-[70vw]'>
                <ProfileHeader username={user.username}/>
                <div className='h-[25vh] lg:h-[50vh]'>
                    <img src={user.banner} alt="" className='w-full lg:w-full'/>
                </div>
                <div className='bg-background py-6 -mt-12 relative'>
                    <div className='flex flex-col items-center justify-center -mt-16 lg:-mt-20'>
                        <Avatar avatar={user.avatar} profile={true}/>
                        <p className='mt-5'><span className='font-bold'>{user.name}</span> | @{user.username}</p>
                        <p className='text-base text-secondary-foreground'>{user.description}</p>
                    </div>
                    <div className='mt-6 flex justify-center'>
                        <div className='bg-secondary flex items-center gap-2 px-2 py-1 rounded-[0.8rem]'>
                            <CircleDollarSign color='hsl(var(--foreground))'/>
                            <p>Posts funded: {user.funded}</p>
                        </div>
                    </div>
                    <div className='w-full mt-6 flex items-center justify-between px-20 text-foreground border-b-4 border-secondary pb-6'>
                        <div className='text-base flex flex-col items-center'>
                            <p className='font-bold'>5</p>
                            <p>posts</p>
                        </div>
                        <div className='text-base  flex flex-col items-center'>
                            <p className='font-bold'>{user.followers}</p>
                            <p>followers</p>
                        </div>
                        <div className='text-base  flex flex-col items-center'>
                            <p className='font-bold'>{user.following}</p>
                            <p>following</p>
                        </div>
                    </div>
                    
                    <div className='mt-10 grid grid-cols-3 gap-x-0 overflow-hidden lg:gap-1'>
                        {images
                            .map((image, index) => {
                            return ( 
                                <img src={image} alt="" className='w-full aspect-[1/1.6] object-cover  group-hover:brightness'/>
                            )
                        })}
                        
                    </div>
                </div>  
            </div>
        </div>
    );
};