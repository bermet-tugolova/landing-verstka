import React from 'react';
import css from './Block8.module.css';
import bckg from './clouds.png'

export const Block8 = () => {
    return <div className={css.block8}>
        <div style={styles}>
            <b className={css.plan}>PLAN YOUR LIFE</b>
            <h2>Get <strong>started</strong> now</h2>
            <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens <br/>
            gubergren similique est cu. Et vel modus congue vituperata.</p>
            <button className={css.btn1}>View pricing</button>
            <button className={css.btn2}>Read documentation</button>
        </div>
    </div>
}
const styles = {
    backgroundImage: `url("${bckg}")`,
    backgroundSize: "1297px 319px",
}