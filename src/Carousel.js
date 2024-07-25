import { useState } from 'react';
import { oneDuck, twoDucks, threeDucks } from './Images/index';

function Carousel() {
    const ducks = [oneDuck, twoDucks, threeDucks];    
    const [index, setIndex] = useState(0);
    let left = "<-";
    let right = "->";

    function onClickLeft() {
        if (index === 0) setIndex(ducks.length - 1);
        else setIndex( index - 1 );
    }

    function onClickRight() {
        if (index === ducks.length - 1) setIndex(0);
        else setIndex(index + 1);
    }

    return (
        <div>
            <div>
                <p>CAROUSEL</p>
                <img src={ducks[index]} alt={ducks[index]} height="200"></img>
                <p>{index + 1}</p>
            </div>
          
            <div>
                <button onClick={onClickLeft}>{left}</button>
                <button onClick={onClickRight}>{right}</button>
            </div>
        </div>
    );
}

export default Carousel;