import React from 'react';
import css from './Block9.module.css'

export const Block9 = () => {
    return <>
    <div className={css.block9}>
        <div className={css.pol1}>
            <h3>Sign up for newsletter</h3>
            <p>Cu qui soleat partiendo urbanitas. Eum aperiri
            indoctum eu, homero alterum.</p>
        </div>
        <div className={css.pol2}>
            <button className={css.btn1}>Email address</button>
            <button className={css.btn2}>Save me</button>
        </div>
    </div>
    <hr style={{width: '1439px'}} />
    </>
}