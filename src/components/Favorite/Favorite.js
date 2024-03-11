import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle.js';
import { useSelector } from 'react-redux';
import { getFavCards } from '../../redux/store.js';
import Card from '../Card/Card.js';
const Favorite = () => {

    const cards = useSelector(state => getFavCards(state));

    if (!cards.length)
        return (
            <div className={styles.noFavoriteCards}>
                <PageTitle>No favourites yet. Sorry...</PageTitle>
            </div>
        );

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <h2 className={styles.title}>
                  Favorites
                </h2>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
                </ul>
            </article>
          
        </div>
    );
};

export default Favorite;