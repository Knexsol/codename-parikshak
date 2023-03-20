import { useState } from 'react'
import styles from './Collapsibl.module.css' 
import clsx from 'clsx'

const Collapsibl = props => {
    const { title, children, classes } = props
    const [isColapsd, setIsColapsd] = useState(false)

    return (
        <div className={clsx(styles.root, isColapsd && styles.colapsd, classes && classes)}>
            <h1 className={styles.title} onClick={() => setIsColapsd(!isColapsd)}>
                {title}

                <i className={clsx("fa-solid fa-circle-chevron-down", styles.ico)}></i>
            </h1>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default Collapsibl