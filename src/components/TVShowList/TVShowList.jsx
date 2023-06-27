import style from './style.module.css';
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export const TVShowList = ({tvShowList, onClickItem}) => {
    return(
        <>
            <div className={style.title} >You may also like :</div>
            <div className={style.list}>
                {tvShowList.map((tvShow) => {
                    return(
                        <span key={tvShow.id + '-' + tvShow.name} className={style.tv_show_list_item} >
                            < TVShowListItem tvShow={tvShow} onClick={onClickItem} />
                        </span>
                        
                    );
                })}
            </div>
        </>
    )
};