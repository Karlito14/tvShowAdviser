import { StarFill, Star, StarHalf } from 'react-bootstrap-icons';

export const FiveStarRating = ({ rating }) => {
    const starList = [];
    // Nombre d'étoiles pleines
    const startFillCount = Math.floor(rating);
    // Demi étoile ou pas
    const hasStarHalf = rating - startFillCount >= 0.5;
    // Nombre d'étoiles vides
    const emptyStarCount = 5 - startFillCount -(hasStarHalf ? 1 : 0);

    for(let i = 0; i < startFillCount; i++){
        starList.push(<StarFill key={"starFill" + i}/>);
    }

    if(hasStarHalf){
        starList.push(<StarHalf key={"starHalf"}/>);
    };

    for(let i = 0; i < emptyStarCount; i++) {
        starList.push(<Star key={'star' + i}/>);
    }

    return(
        <div>{starList}</div>
    )
};
