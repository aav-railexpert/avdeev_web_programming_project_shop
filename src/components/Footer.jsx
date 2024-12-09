import './Footer.css';
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div>
                        <Logo />
                        <div className="footer-description">
                            мы создаём одежду, которая не заставляет быть конвенциональными мужчинами или женщинами, она просто не мешает быть собой.
                        </div>
                    </div>
                    <div>
                        <div className="footer-menu">
                            <div>
                                <a href="" className="footer-menu-item beige">
                                    помощь
                                </a>
                                <a href="" className="footer-menu-item">
                                    доставка
                                </a>
                                <a href="" className="footer-menu-item">
                                    возврат
                                </a>
                                <a href="" className="footer-menu-item">
                                    FAQ
                                </a>
                                <a href="" className="footer-menu-item">
                                    документы
                                </a>
                            </div>
                            <div>
                                <a href="" className="footer-menu-item beige">
                                    о нас
                                </a>
                                <a href="" className="footer-menu-item">
                                    вакансии
                                </a>
                                <a href="" className="footer-menu-item">
                                    магазины
                                </a>
                                <a href="" className="footer-menu-item">
                                    контакты
                                </a>
                                <a href="" className="footer-menu-item">
                                    стань агентом
                                </a>
                            </div>
                            <div className="footer-socials">
                                <div className="beige">наши соцсети</div>
                                <div>
                                    <a href="" className="footer-socials-item">
                                        <img src="/assets/img/icon-tg.png" alt=""/>
                                    </a>
                                    <a href="" className="footer-socials-item">
                                        <img src="/assets/img/icon-vk.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-contacts-title beige">свяжись с нами</div>
                        <div className="footer-contacts">
                            <a href="tel:+79196405109" className="footer-menu-item">+7 (919) 640-5109</a>
                            <div className="beige">10:00-22:00</div>
                            <a href="mailto:wrck7@yandex.ru" className="footer-menu-item">wrck7@yandex.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;