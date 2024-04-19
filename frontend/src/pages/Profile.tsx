import { Avatar } from '@/components/Avatar';
import { images, users } from '../utils/mock';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    return (
        <div className='w-[100vw]'>
            <div className='w-[full] lg:mx-auto lg:w-[70vw]'>
                <div className='h-[25vh] lg:h-[50vh]'>
                    <img src={user.banner} alt="" className='h-full lg:w-full'/>
                </div>
                <div className='bg-background py-6 -mt-12 relative'>
                    <div className='-mt-20 ml-4 lg:-mt-28'>
                        <Avatar avatar={user.avatar}/>
                    </div>
                    <div className='w-full mt-4 flex items-center justify-between px-6 text-foreground'>
                        <div className=''>
                            <p className='text-xl  font-bold'>{user.name}</p>
                            <p className='text-base text-secondary-foreground'>{user.description}</p>
                        </div>
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
                    <div className='mt-8 px-6 w-full '>
                        <button className='bg-secondary px-8 font-bold rounded-[2rem]'>Edit Profile</button>
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