import styles from './CardForm.module.scss'
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useState } from 'react';

const CardForm = (props) => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
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