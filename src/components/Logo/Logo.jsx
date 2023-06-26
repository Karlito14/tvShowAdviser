import style from './style.module.css';

export const Logo = ({image, title, subtitle}) => {
    return (
        <>
            <div className={style.container}>
                <img className={style.image} src={image} alt='logo'/>
                <span className={style.title} >{title}</span>
            </div>
            <span className={style.subtitle} >{subtitle}</span>
        </>
    )
}