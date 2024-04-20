
export function Avatar({avatar} : {avatar: any}) {
    return (    
        <div className="lg:w-[7rem] w-[5.5rem]">
            <img src={avatar} alt="" className="w-full rounded-full border-[0.2rem] border-"/>
        </div>
    )
}