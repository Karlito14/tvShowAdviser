import style from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export const SearchBar = ({ onSubmit }) => {
    
    const submit = (event) => {
        if(event.key === 'Enter' && event.target.value.trim() !== ''){
            onSubmit(event.target.value);
        }
    };

    return (
        <>
            <SearchIcon size={27} className={style.icon} />
            <input type='text' placeholder='Search a TV Show you may like' className={style.input} onKeyUp={submit}/>
        </>
    )
}