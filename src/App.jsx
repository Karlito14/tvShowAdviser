import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tv-show';
import './global.css';
import style from './style.module.css';
import { BACKDROP_BASE_URL } from './config';

export const App = () => {
    const[currentTVShow, setCurrentTVShow] = useState();
    
    async function fetchPopulars () {
        try{
            const populars = await TVShowAPI.fetchPopulars();
            if(populars.length > 0) {
                setCurrentTVShow(populars[0]);
            };
        } catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchPopulars();
    }, []);

    console.log(currentTVShow)

    return(
        <div 
            className={style.main_container}
            style={{background: currentTVShow ? 
                `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` 
                : 'black'}}
        >
            <div className={style.header}>
                <div className='row'>
                    <div className='col-4'>
                        <div>Logo</div>
                        <div>Subtitle</div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <input type='text' />
                    </div>
                </div>
            </div>
            <div className={style.description}>Description</div>
            <div className={style.recommandations}>Recommandations</div>
        </div>
    )
}