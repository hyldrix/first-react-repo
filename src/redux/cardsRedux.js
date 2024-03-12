import shortid from 'shortid';
import { compareStrings } from '../utils/strContains.js';

const createActionName = actionName => `app/lists/${actionName}`;
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const ADD_CARD = createActionName('ADD_CARD');

export const getCardById = ({ cards }, cardId) => cards.find(card => card.id === cardId);
export const getFavCards = ({ cards }) => cards.filter(card => card.isFavorite === true)
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && compareStrings(card.title, searchString));

export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });


const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

export default cardsReducer;