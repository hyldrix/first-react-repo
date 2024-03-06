import styles from './NavBar.module.scss'
import Container from '../Container/Container.js'

const NavBar = () => {

    return (
        <nav className={styles['nav-bar']}>
            <Container>
                <div className={styles.parent}>
                    <div className={styles['home-icon-container']}>
                        <a href="/"><i class='fa fa-tasks'></i></a>
                    </div>
                    <div className={styles['list-of-links']}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/favorite">Favorite</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>

            </Container>
        </nav>
    );
};

export default NavBar;