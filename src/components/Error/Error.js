import styles from '../Error/Error.module.scss'
import PageTitle from '../PageTitle/PageTitle.js';
const Error = () => {

    return (
        <div className={styles['error']}>
            <PageTitle>404 NOT FOUND</PageTitle>
            <p className={styles.subtitle}>Site you attempted to access does not exist on this server.</p>

        </div>
    );
};

export default Error;