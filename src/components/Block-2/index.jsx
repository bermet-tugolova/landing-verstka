import React from 'react';
import css from './Block2.module.css'
import bitbucket from './images/bitbucket.png'
import apple from './images/apple.png';
import facebook from './images/facebook.png';
import atlassian from './images/atlassian.png';
import audi from './images/audi.png';
import illustr from './images/illustration.png'

export const Block2 = () => {
    return <div>
        <div className={css.foto}>
        <img src={bitbucket}></img>
        <img src={apple}></img>
        <img src={facebook}></img>
        <img src={atlassian}></img>
        <img src={audi}></img>
        </div>
        <div className={css.block2}>
            <div className={css.text}>
                <p className={css.desk}>DESKTOP AND MOBILE APP</p>
                <h1 className={css.zag}><strong>Plan</strong> and <strong>manage</strong></h1>
                <p className={css.ap}>Brute laoreet efficiendi id his, ea illum nonumes luptatum <br/> 
                pro. Usu atqui laudem an, insolens gubergren similique <br /> 
                est cu. Et vel modus congue vituperata. Solum patrioque <br />
                no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
                <button className={css.btn2}>View video ▷</button>
                <button className={css.btn3}>See features</button>
            </div>
            <div className={css.illustr}>
                <img src={illustr}></img>
            </div>
        </div>
        
        
    </div>
}