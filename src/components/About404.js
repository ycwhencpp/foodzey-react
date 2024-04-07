import {Link} from "react-router-dom";
const ErrorAbout404 = () => {
    return (
        <div className="error-container">
            <h1> searched for something invalid </h1>
            <h2>Click here to get back to  <Link to ="/">Home page</Link></h2>
        </div>
    )
}

export default ErrorAbout404;