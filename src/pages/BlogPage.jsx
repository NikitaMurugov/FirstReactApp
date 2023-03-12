import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import Preload from "../components/Preloader";

const Blog = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const drawPosts = posts?.map((item) => {
        return <NavLink key={item.id} to={`/post/${item.id}`} className={'w-100 p-0'}>
            <div  className="flex flex-col bg-emerald-200 w-100 rounded pt-2 pb-2 pl-3 pr-3 font-semibold text-emerald-800">
                <span className="post__header">
                    id: {item.id}
                </span>
                <span className="post__name">
                    name: {item.title}
                </span>
            </div>
        </NavLink>;
    })
    return <>
        <div>
            <h1>Blog</h1>
            <p>Все посты которые смог придумать:</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-1 mt-2">
                { drawPosts ?? <Preload /> }
            </div>
        </div>
    </>
}
export { Blog };