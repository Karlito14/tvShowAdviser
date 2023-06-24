import './global.css';
import style from './style.module.css';

export const App = () => {
    return(
        <div className={style.main_container}>
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