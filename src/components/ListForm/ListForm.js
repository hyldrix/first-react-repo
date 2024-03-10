import { addList } from '../../redux/store.js';
import styles from './ListForm.module.scss'
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const ListForm = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({
            title, description
        }));
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title:<TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
            <span>Description:<TextInput value={description} onChange={e => setDescription(e.target.value)} /></span>
            <span><Button>Add list</Button></span>
        </form>
    );
};

export default ListForm;