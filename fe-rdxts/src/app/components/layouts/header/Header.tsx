import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            Header
            <Link to="/home">Home</Link> |{" "}
            <Link to="/create-exam">Create Exam</Link>
        </div>
    )
}

export default Header