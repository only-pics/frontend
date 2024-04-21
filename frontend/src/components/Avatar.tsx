export function Avatar({avatar} : {avatar: any}) {
    return (    
        <div className="lg:w-[7rem] lg:h-[7rem] w-[5.5rem] h-[5.5rem]" >
            <img src={avatar} alt="" className="w-full h-full rounded-full border-[0.2rem] border-"/>
        </div>
    )
}

