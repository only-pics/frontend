
export function Avatar({avatar} : {avatar: any}) {
    return (    
        <div className="w-[7rem] ">
            <img src={avatar} alt="" className="w-full rounded-full border-[0.2rem] border-"/>
        </div>
    )
}