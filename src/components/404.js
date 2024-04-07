import {Link} from "react-router-dom";
const Error404 = () => {
    return (
        <div className="error-container">
            <h1>Oops !! Looks like you are Lost </h1>
            <h2>Click here to get back to  <Link to ="/">Home page</Link></h2>
        </div>
    )
}

export default Error404;