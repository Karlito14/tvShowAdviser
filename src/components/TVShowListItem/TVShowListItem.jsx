import style from './style.module.css';
import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import { FiveStarRating } from '../FiveStarRating/FiveStarRating';

export const TVShowListItem = ({tvShow, onClick}) => {
    const rating = tvShow.vote_average / 2
    
    return (
        <div className={style.container} onClick={() => {onClick(tvShow)}}>
            <img src={SMALL_IMG_COVER_BASE_URL+tvShow.backdrop_path} alt={tvShow.name} className={style.image} />
            <div className={style.div_title}>
                <span className={style.title}>{tvShow.name}</span>
                <FiveStarRating rating={rating}/>
            </div>
        </div>
    )
}