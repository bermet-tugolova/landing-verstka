import React from 'react';
import css from './Block10.module.css';
import logo from './images/logo.png';
import facebook from './images/f.png';
import telegram from './images/telega.png';
import twitter from './images/twitter.png';
import m from './images/m.png';

export const Block10 = () => {
    return <div className={css.block10}>
        <ul>
                <li className={css.logo}><img src={logo}></img></li>
                <li className={css.text}>Home</li>
                <li className={css.text}>Blog</li>
                <li className={css.text}>Features</li>
                <li className={css.text}>Pricing</li>
                <li className={css.text}>Documentation</li>
                

                <div className={css.social}>
                <img src={facebook}></img>
                <img src={telegram}></img>
                <img src={twitter}></img>
                <img src={m}></img>
                <button className={css.btn1}>Get started</button>
                </div>
            </ul>
            <p className={css.copyr}>Copyright © 2018 by Random site</p>
    </div>
}