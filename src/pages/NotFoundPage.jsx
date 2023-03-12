import {Link} from "react-router-dom";

const NotFound = () => {
    return <>
        <div>
            <h1>NotFound 404</h1>
            <Link to='/'>Доме</Link>
        </div>
    </>
}
export { NotFound };