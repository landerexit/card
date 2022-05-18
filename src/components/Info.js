import React from 'react'
import personalImg from '../img/orig.png'

export default function Info() {
    return (
        <section className="info-section flex-center flex-column">
            <img className="info-section__personal-img" src={personalImg} alt="bruh"/>
            <section className="info-section__names flex-center flex-column">
                <h1 className='info-section__name'>Эмиль Каримов</h1>
                <h2 className='info-section__job-post'>Junior Frontend Разработчик</h2>
                <small className='info-section__pseudonym'>@landerexit</small>
            </section>

            <section className="info-section__personal-links">
                <a className="info-section__personal-email" href="mailto:landerexit@gmail.com">Email</a>
                <a className="info-section__personal-habr" href="https://career.habr.com/landerexit">Habr</a>
            </section>
        </section>
    )
}