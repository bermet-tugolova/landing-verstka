import React from 'react';
import css from './Block3.module.css';
import {data} from './data.js'

export const Block3 = () => {
    return <div>
        <div className={css.block3}>
            <p className={css.about}>ABOUT US</p>
            <h2>Read about our app</h2>
            <div className={css.render}>
            {data.map((el,id) => {
                return <div key={id}>
                    <img src={el.img} alt=""/>
                    <h3>{el.title}</h3>
                    <p className={css.text}>{el.text}</p>
                </div>
            })}
            </div>
            <div className={css.btn}>
            <button className={css.btn1}>Read more</button>
            <p className={css.or}> <hr /> OR <hr /></p>
            <button className={css.btn2}>Get started</button>
            </div>            
        </div>
    </div>
}