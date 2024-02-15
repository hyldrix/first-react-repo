import styles from './Container.module.scss'

const Container = (props) => {
    return (
        <div className={styles["main-container"]}>
            {props.children}
        </div>
    )
}

export default Container;