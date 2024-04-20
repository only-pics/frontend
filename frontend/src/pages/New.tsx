import FileInput from "@/components/FileInput"
import NewPostHeader from "@/components/NewPostHeader"

export default function New() {
    const onSubmit = () => {
        
    }
    
    return(
        <div>
            <NewPostHeader />
            <div className="h-[100vh]">
                <form onSubmit={onSubmit} className="w-full h-full flex justify-center">
                    <FileInput />
                </form>
            </div>
        </div>
    )
}