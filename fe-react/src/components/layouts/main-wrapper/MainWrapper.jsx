import Header from "../header/Header"
import styles from './MainWrapper.module.css'

const MainWrapper = props => {
    const { children } = props

    return (
        <div className="main_wrapper">
            <Header />
            <div className={styles.main_body}>
            { children }
            </div>
        </div>
    )
}

export default MainWrapper