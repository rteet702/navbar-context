import { useContext } from "react"
import MyContext from "./MyContext"

const Nav = () => {

    const context = useContext(MyContext)

    return (
        <div className="Navbar">
            <h2>Hi, {context.name}</h2>
        </div>
    )
}

export default Nav