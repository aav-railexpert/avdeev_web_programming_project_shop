import './Header.css';
import { useState } from 'react';
import Logo from "./Logo";

const Header = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    function dropdownToggle() {
        setIsDropdownActive(!isDropdownActive)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-inner__left">
                        <Logo />
                        <div className={'header-catalog ' + (isDropdownActive ? 'dropdown-active' : '')}>
                            <button className="header-catalog__button" onClick={dropdownToggle}>каталог <img src="/assets/img/icon-dropdown.png" alt=""/></button>
                            <div className="header-catalog__dropdown">
                                <a href="/catalog/futbolki/" className="header-catalog__dropdown-link">футболки</a>
                                <a href="/catalog/futbolki/" className="header-catalog__dropdown-link">футболки</a>
                                <a href="/catalog/futbolki/" className="header-catalog__dropdown-link">футболки</a>
                            </div>
                        </div>
                    </div>
                    <div className="header-inner__right">
                        <a href="/checkout" className="icon-cart">
                            <img src="/assets/img/icon-cart.png" alt=""/>
                        </a>
                        <a href="tel:8(900) 551-55-55">8(900) 551-55-55</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;