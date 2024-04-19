import { images } from '../utils/mock';

export default function Profile() {

    return (
        <div className='w-[100vw] mt-20 p-6'>
             <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3'>
                {images
                    .map((image, index) => {
                    return ( 
                        <div className="relative aspect-square w-full overflow-hidden">
                            <img src={image} alt="" className="absolute aspect-square object-cover group-hover:brightness-90"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};