import styles from './CardForm.module.scss'
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store.js';

const CardForm = (props) => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title: title, columnId: props.columnId})); 
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.CardForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add</Button>
        </form>
    );
}


export default CardForm