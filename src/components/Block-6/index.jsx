import React from 'react';
import css from './Block6.module.css';
import img from './testimonials.png'

export const Block6 = () => {
    return <div className={css.block6}>
        <div className={css.pol1}>
            <b>TESTIMONIALS</b>
            <h1>Customers's quotes</h1>
            <p className={css.text}>Brute laoreet efficiendi id his, ea illum nonumes <br/>
            luptatum pro. Usu atqui laudem an.</p>
        </div>
        <div className={css.pol2}>
            <img className={css.pic} src={img} alt="" />
        </div>
    </div>
}