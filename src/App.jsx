import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tv-show';
import './global.css';
import style from './style.module.css';
import { BACKDROP_BASE_URL } from './config';
import { TVShowDescription } from './components/TVShowDescription/TvShowDescription';
import { Logo } from './components/Logo/Logo';
import { TVShowListItem } from './components/TVShowListItem/TVShowListItem';
import logo from './assets/images/logo.png';

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

    const setTVShowFromRecommandation = (tvShow) => {

    };

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
                        <Logo title={'Watowatch'} subtitle={'Find a show you may like'} image={logo}/>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <input type='text' />
                    </div>
                </div>
            </div>
            <div className={style.description}>
                {currentTVShow && <TVShowDescription tvShow={currentTVShow} />}
            </div>
            <div className={style.recommandations}>
                {currentTVShow && 
                <TVShowListItem 
                    tvShow={currentTVShow} 
                    onClick={setTVShowFromRecommandation} 
                />}
            </div>
        </div>
    )
}