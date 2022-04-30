import React from 'react'
import vkImg from '../img/vk.svg'
import telegramImg from '../img/telegram.svg'
import githubImg from '../img/github.svg'

export default function Footer() {
    return (
        <footer className="social-links-section">
            <a href="https://vk.com/m00nr1v3r"><img className="social-link" src={vkImg} alt="vk"/></a>
            <a href="https://github.com/landerexit"><img  className="social-link" src={githubImg} alt="github"/></a>
            <a  href="https://t.me/landerexit"><img  className="social-link" src={telegramImg} alt="telegram"/></a>
        </footer>
    )
}