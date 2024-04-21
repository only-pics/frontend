import { Avatar } from '@/components/Avatar';
import { images, users } from '../utils/mockPintado';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircleDollarSign, Wallet } from 'lucide-react';
import ProfileHeader from '@/components/ProfileHeader';
import { set } from 'firebase/database';

export default function Profile() {
    const params = useParams();
    const id = params.id || "";

    const [user, setUser] = useState<any>({});
    const [userPosts, setUserPosts] = useState<any>([]);

    const [userPrototype, setUserPrototype] = useState<any>({});

    useEffect(() => {
        const getUserPosts = async ({ id }: any) => {
            try {
                const response = await fetch(`https://backend-only-pics.vercel.app/api/get-user-posts/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserPosts(data);
                    setUserPrototype({
                        userId: id,
                        userName: data[0].userName,
                        wallet: data[0].wallet,
                        userFollowers: data[0].followers || 27,
                        userFollowing: data[0].following || 27,
                        postsFunded: Object.keys(data).length, // number of posts funded
                        userImg: data[0].postImg, // might add userImg in the future
                        userBio: data[0].description, // random description
                        // add other stuff here
                    });
                    console.log(data);
                } else {
                    console.error("Something went wrong");
                }
            } catch (error) {
                console.error(error);
            }
        }

        getUserPosts({ id });
    }, [])

    // const getUser = async () => {
    //     try {
    //         setUser(users[Number(id) - 1]);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getUser();
    // }, [])

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
                <ProfileHeader username={userPrototype.userName} />
                <div className='h-[25vh] lg:h-[50vh]'>
                    <img src={user.banner} alt="" className='w-full lg:w-full' />
                </div>
                <div className='bg-background py-6 -mt-12 relative'>
                    <div className='flex flex-col items-center justify-center -mt-16 lg:-mt-20'>
                        <Avatar avatar={userPrototype.userImg} profile={true} />
                        <p className='mt-5'><span className='font-bold'>{userPrototype.userName}</span> | Wallet: {userPrototype.wallet}</p>
                        <p className='text-base text-secondary-foreground'>{userPrototype.userBio}</p>
                    </div>
                    <div className='mt-6 flex justify-center'>
                        <div className='bg-secondary flex items-center gap-2 px-2 py-1 rounded-[0.8rem]'>
                            <CircleDollarSign color='hsl(var(--foreground))' />
                            <p>Posts funded: {userPrototype.postsFunded}</p>
                        </div>
                    </div>
                    <div className='w-full mt-6 flex items-center justify-between px-20 text-foreground border-b-4 border-secondary pb-6'>
                        <div className='text-base flex flex-col items-center'>
                            <p className='font-bold'>{Object.keys(userPosts).length}</p>
                            <p>posts</p>
                        </div>
                        <div className='text-base  flex flex-col items-center'>
                            <p className='font-bold'>{userPrototype.userFollowers}</p>
                            <p>followers</p>
                        </div>
                        <div className='text-base  flex flex-col items-center'>
                            <p className='font-bold'>{userPrototype.userFollowing}</p>
                            <p>following</p>
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-3 gap-x-0 overflow-hidden lg:gap-1'>
                        {userPosts
                            .map((post: any, index: number) => {
                                return (
                                    // should add routes to the post ?
                                    <div className='group relative'>
                                        <img src={post.postImg} alt="" className='w-full aspect-[1/1.6] object-cover group-hover:brightness' />
                                        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                            <p className='text-white'>View post</p>
                                        </div>
                                    </div>
                                )
                            })}
                        {/* {images
                            .map((image, index) => {
                                return (
                                    <img src={image} alt="" className='w-full aspect-[1/1.6] object-cover  group-hover:brightness' />
                                )
                            })} */}
                    </div>
                </div>
            </div>
        </div>
    );
};