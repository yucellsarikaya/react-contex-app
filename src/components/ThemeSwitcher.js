import React from 'react'
import { MainContext, useContext } from "../context"

export default function ThemeSwitcher() {

    const { theme, setTheme } = useContext(MainContext)

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <button onClick={switchTheme}>Switch thene</button>
        </div>
    )
}
