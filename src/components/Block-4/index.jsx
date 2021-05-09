import React from 'react';
import css from './Block4.module.css';
import icon1 from './images/icon.png';
import icon2 from './images/icon2.png'

export const Block4 = () => {
    return <div className={css.block4}>
        <div className={css.pol}>
        <img src={icon1} alt="icon"/>
        <h4>89%</h4>
        <p className={css.text1}>Customers who have <br/>
        increased their productivity</p>
        </div>
        <div className={css.pol2}>
        <img src={icon2} alt="icon"/>
        <h4>3123</h4>
        <p className={css.text2}>Users who have used our <br/>
        application</p>
        </div>
    </div>
}