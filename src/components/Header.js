import React from "react";
import Logo from "../icons/logo";
import "../styles/Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header_contains">
                <Logo className="logo" />
                <div className="tabs">
                    <div className="option">Pay 1/3rd Card</div>
                    <div className="option">Pay 1/2 Card</div>
                </div>
            </div>
        </div>
    )
}

export default Header;