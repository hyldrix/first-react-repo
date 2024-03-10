import styles from './NavBar.module.scss'
import Container from '../Container/Container.js'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className={styles['nav-bar']}>
            <Container>
                <div className={styles.parent}>
                    <div className={styles['home-icon-container']}>
                        <a href="/"><i className='fa fa-tasks'></i></a>
                    </div>
                    <div className={styles['list-of-links']}>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>

            </Container>
        </nav>
    );
};

export default NavBar;