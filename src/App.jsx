import { useState, useEffect } from 'react';
import { TVShowAPI } from './api/tv-show';
import './global.css';
import style from './style.module.css';
import { BACKDROP_BASE_URL } from './config';
import { TVShowDescription } from './components/TVShowDescription/TvShowDescription';
import { Logo } from './components/Logo/Logo';
import { TVShowList } from './components/TVShowList/TVShowList';
import logo from './assets/images/logo.png';

export const App = () => {
    const[currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);
    
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

    async function fetchRecommendations (tvShowId) {
        try{
            const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
            if(recommendations.length > 0) {
                setRecommendationList(recommendations.slice(0, 10));
            };
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    const setTVShowFromRecommendation = (tvShow) => {
        setCurrentTVShow(tvShow);
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
                {recommendationList && recommendationList.length > 0 && 
                <TVShowList 
                    tvShowList={recommendationList}
                    onClickItem={setTVShowFromRecommendation}
                />}
            </div>
        </div>
    )
}