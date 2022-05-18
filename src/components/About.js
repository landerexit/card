import React from 'react'

export default function About() {
    return (
        <section className="about-section">
            <h3 className='about-section__title'>О себе</h3>
            <div className='about-section__paragraph-box'>

                <p className='about-section__paragraph'>
                    Обучаюсь Front-End разработке.
                </p>

                <p className='about-section__paragraph'>
                    Владею: Python,  JavaScript, TypeScript, React.js, MobX.js, MySQL, PostgreSQL.
                </p>

                <p className='about-section__paragraph'>
                    На практике применяю Git, Webpack, SASS
                </p>

                <p className='about-section__paragraph'>
                Крепкие знания в верстке на чистом CSS: БЭМ, flex и grid, адаптивная и отзывчивая вёрстки
                </p>

            </div>
        </section>
    )
}