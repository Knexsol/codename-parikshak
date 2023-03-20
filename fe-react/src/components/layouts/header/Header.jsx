import { Link } from "react-router-dom";
import styles from  './Header.module.css'
import routes from "../../../routes";

const Header = props => {

    return (
        <header>
            <div className={styles.header}>
                <ul>
                    {
                        routes.filter(r => r.displayName).map(r => 
                        <li key={r.displayName}>
                            <Link to={r.path}>{r.displayName}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header