
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from'react-redux';
import { getCardById, toggleCardFavorite } from '../../redux/cardsRedux.js';

const Card = (props) => {
    const card = useSelector(state => getCardById(state, props.id))
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCardFavorite(props.id))
    }


    return (
        <li className={styles.card}>{props.title}
        <i onClick={toggle} className={clsx('fa fa-star-o', card.isFavorite && styles.favorite)} aria-hidden="true"></i>
        </li>
    );
}

export default Card;