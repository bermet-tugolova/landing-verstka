import React from 'react';
import css from './Block5.module.css';
import tochki from './images/circles.png';
import illustr from './images/illustrations.png'

export const Block5 = () => {
    return <div className={css.block5}>
        <b className={css.our}>OUR RESOURCES</b>
        <h2>Start reading our blog</h2>
        <div className={css.bl5_2}>
            <div className={css.pol1}>
                <img src={illustr} alt="" />
            </div>
            <div className={css.pol2}>
                <h1>How to start planning</h1>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut
                    nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                    diceret persecuti. Natum petentium principes mei ea. Tota
                    everti periculis vis ei, quas tibique pro at, eos ut decore ...</p>
                <button className={css.btn1}>Read now</button>
                <button className={css.btn2}>Add to your bookmarks</button>
            </div>
        </div>
        <img className={css.tochki} src={tochki} alt="" />
    </div>
}