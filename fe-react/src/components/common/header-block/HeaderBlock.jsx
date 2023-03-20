import styles from './HeaderBlock.module.css'
const HeaderBlock = props => {
    const { title, subtitle } = props

    return (
        <div className={styles.root}>
            <h1>
                {title}
            </h1>
            <p>
                {subtitle}
            </p>
        </div>
    )
}

export default HeaderBlock