import { MainContext, useContext } from "../context"

export default function Header() {
    const {theme, logoText} = useContext(MainContext)
    return (
        <div>
            <h3>{logoText}</h3>
            Current theme = {theme}
        </div>
    )
}
