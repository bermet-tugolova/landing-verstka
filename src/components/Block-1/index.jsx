import React from 'react';
import css from './Block1.module.css';
import play from './images/play.png'

export const Block1 = () => {
    return <div>
        <div className={css.fon}>
            <p className={css.plan}>PLAN YOUR LIFE</p>
            <h2>Increase your <strong>productivity</strong></h2>
            <p className={css.text}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu <br/>
            atqui laudem an, insolens gubergren similique est cu. Et vel modus <br/>
            congue vituperata.</p>
            <img src={play} alt=""/>
        </div>
    </div>
}