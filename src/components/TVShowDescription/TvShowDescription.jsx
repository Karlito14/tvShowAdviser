import { FiveStarRating } from '../FiveStarRating/FiveStarRating';
import style from './style.module.css';

export const TVShowDescription = ({tvShow}) => {
    const rating = (tvShow.vote_average / 2).toFixed(2);
    return (
        <div>
            <div className={style.title}>{tvShow.name}</div>
            <div className={style.rating_container}>
                <FiveStarRating rating={rating}/>
                <div className={style.rating}>{rating}/5</div>
            </div>
            <div className={style.overview}>{tvShow.overview}</div>
        </div>
    )
};