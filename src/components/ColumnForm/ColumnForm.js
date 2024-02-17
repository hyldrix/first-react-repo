import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js'
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = (props) => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title, icon: icon});
        setTitle('')
        setIcon('')
    }

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title:<TextInput  value={title} onChange={e => setTitle(e.target.value)} /></span>
            <span>Icon:<TextInput  value={icon} onChange={e => setIcon(e.target.value)} /></span> 
            <span><Button>Add column</Button></span> 
        </form>
	);
};

export default ColumnForm;