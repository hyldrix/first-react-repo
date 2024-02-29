import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store.js';

const SearchForm = () => {

    const [searchPhrase, setSearchPhrase] = useState('');


    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateSearchString({ searchString: searchPhrase }))
    }

    return (
        <form className={styles.searchForm} onSubmit={e => handleSubmit(e)}>
            <TextInput placeholder='Search...' onChange={e => setSearchPhrase(e.target.value)} />
            <Button><span className='fa fa-search' /></Button>
        </form>
    );
};

export default SearchForm;