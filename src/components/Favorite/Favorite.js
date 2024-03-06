import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle.js';
const Favorite = () => {

    return (
        <div className={styles['favorite']}>
            <PageTitle>My first React App</PageTitle>
            <p className={styles.subtitle}>All your favorites</p>

        </div>
    );
};

export default Favorite;