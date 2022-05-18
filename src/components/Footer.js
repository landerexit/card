import React from 'react'
import vkImg from '../img/vk.svg'
import telegramImg from '../img/telegram.svg'
import githubImg from '../img/github.svg'

export default function Footer() {
    return (
        <footer className="social-links-section">
            <a className="social-links__link-wrapper" href="https://vk.com/m00nr1v3r">
                <img className="social-links-section__social-link" src={vkImg} alt="vk"/>
            </a>
            <a className="social-links__link-wrapper" href="https://github.com/landerexit">
                <img  className="social-links-section__social-link" src={githubImg} alt="github"/>
            </a >
            <a className="social-links__link-wrapper" href="https://t.me/landerexit">
                <img  className="social-links-section__social-link" src={telegramImg} alt="telegram"/>
            </a>
        </footer>
    )
}