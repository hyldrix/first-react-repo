
import Card from '../Card/Card.js';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { getFilteredCards } from '../../redux/cardsRedux.js';

const Column = (props) => {
    const cards = useSelector(state => getFilteredCards(state, props.id));


    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}>
                </span>{props.title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>

    );
}

export default Column;