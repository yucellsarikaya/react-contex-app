import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { MainContext, useContext } from "../context"


export default function Footer() {
    const { logoText, setLogoText } = useContext(MainContext)

    const switchLogoText = () => {
        setLogoText(logoText === 'yucelSarikaya.net' ? 'yucelSarikaya.com' : 'yucelSarikaya.net')
    };

    return (
        <div>
            Footer Component <br />
            <ThemeSwitcher />
            <button onClick={switchLogoText}>Switch Logo Text</button>
        </div>
    )
}
