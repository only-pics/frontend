import { useCallback, useEffect, useRef, useState } from "react"
import { DropzoneState, useDropzone } from "react-dropzone";
import { Upload, X } from 'lucide-react';

interface InputProps {
    dropzone: DropzoneState
}

interface HasFileProps {
    file?: string,
    removeFile: () => void
}

export default function FileInput() {
    const [file, setFile] = useState<string | null>(null);

    const onDrop = useCallback((files : File[]) => {
        console.log(files[0]);
        setFile(URL.createObjectURL(files[0]));
    }, [])

    const removeFile = useCallback(() => {
        setFile(null);
    }, [file])

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/*' : ['.jpeg', '.png']
        }
    })

    if(file) return <HasFile file={file} removeFile={removeFile}/>;

    return <Input dropzone={dropzone}/>;
}

const Input = ({dropzone} : InputProps) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;

    return(
        <div 
            className={
                `lg:my-auto mt-12 h-72 lg:w-[30vw] px-12 rounded-lg border-dashed border-4 border-secondary hover:border-foreground hover:bg-secondary transition-all duration-700
                flex flex-col items-center justify-center
                ${isDragActive ? 'bg-primary' : ''}`
            }
            {...getRootProps()}
        >
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    <Upload className='w-10 h-10 mb-3' color={`${isDragActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))'}`}/>
                    {isDragActive ? 
                        <p className="mb-2 text-base text-foreground font-bold">Release to upload</p>
                        : 
                        <>
                            <p className="mb-2 text-base text-foreground">
                                <span className="font-bold">Click to upload</span> or drag files here. 
                            </p>
                            <p className="text-sm">Image files only.</p>    
                        </>
                    }
                </div>
            </label>
            <input {...getInputProps()}  className="hidden" />
        </div>
    )
}

const HasFile = ({ file, removeFile }: HasFileProps) => {
    const [description, setDescription] = useState<string>("");
    const textAreaRef = useRef(null);

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }, [description])

    return(
        <div className="w-full px-6 py-8 lg:mt-12">
            <div className="flex flex-col items-center">
                <p className="text-lg">Post preview</p>
                <div className="mt-6 relative w-[70vw] lg:w-1/3">
                    <button onClick={removeFile} type="button" className="absolute right-0 pr-2 pt-2">
                        <X size={"20"}/>
                    </button>
                    <img className="rounded-lg" src={file} alt="" />
                </div>
                <textarea 
                    placeholder="Write a post description" 
                    value={description} 
                    onChange={handleChange} 
                    className="bg-background resize-none w-[70vw] h-[20vh] px-4 py-2 mt-12 outline-0 border-2 border-secondary lg:w-1/3 " 
                    name="" 
                    id="post-description"
                    rows={6}
                    ref={textAreaRef}
                />
                <button className="bg-primary rounded-lg px-4 py-2 mt-6" type="submit">Publish</button>
            </div>
        </div>
    )
}