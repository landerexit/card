import React from 'react'
import personalImg from '../img/orig.png'

export default function Info() {
    return (
        <section className="info-section flex-center flex-column">
            <img className="personal-img" src={personalImg} alt="bruh"/>
            <section className="personal-info flex-center flex-column">
                <h1>Emil Karimov</h1>
                <h2>Frontend Developer</h2>
                <small>@landerexit</small>
            </section>

            <section className="personal-links">
                <a className="personal-email" href="mailto:landerexit@gmail.com">Email</a>
                <a className="personal-habr" href="https://career.habr.com/landerexit">Habr</a>
            </section>
        </section>
    )
}