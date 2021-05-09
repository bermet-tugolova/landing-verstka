import React from 'react';
import css from  './Block7.module.css';
import icon from './Vector.png'

export const Block7 = () => {
    return <div className={css.block7}>
        <b>Customer help</b>
        <h2>Frequently asked questions</h2>
            <p className={css.req}>˅ Reque insolens in vel? <hr/></p>
            <p>˅ Vis rebum error graecis ea, id sit postea accusamus?<hr/></p>
            <p className={css.p3}><strong><img src={icon} alt="" /> Lorem repudiandae ne nec?</strong>
            <p className={css.text}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut 
            nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
            diceret persecuti.<button className={css.btn}>Go to documentation</button>
            </p><hr />           
            </p>
            <p>˅ Ad dicit numquam vel. Et eos iudico feugait percipitur?<hr /></p>
            <p>˅ Sea no dico percipitur. Fierent constituam definitiones id eum?<hr /></p>
    </div>
}