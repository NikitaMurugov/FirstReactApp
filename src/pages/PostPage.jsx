import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Preload from "../components/Preloader";

const Post = () => {
    const {id} = useParams()
    const [post, setPost] = useState();
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    return <>
        <div className="rounded p-3 bg-emerald-200">
            {post ? <>
                <span className="font-semibold block text-lg">{post?.title}</span>
                <hr className='border-emerald-900 mt-2 mb-2'/>
                <span>{post?.body}</span>
            </> : <Preload />}

        </div>
    </>
}
export { Post };