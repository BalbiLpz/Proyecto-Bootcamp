import React from 'react';
import './CardOne.css';

const CardTwo = ({ classCard, classTop, text }) => (
    <div className={`${classCard} ${classTop}`}>
        <div className=" cardTwo container center">
            <h2>Es una plataforma por y para nutricionistas donde almacenar los valores
                nutricionales de cada tipo de comida, y poder visualizar sus cantidades
                en un grafico, si has leido hasta aquí a que esperas, Registrate!!</h2>
                </div>
    </div>

);

export default CardTwo;