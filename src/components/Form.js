import { useContext } from "react"
import MyContext from "./MyContext"

const Form = () => {

    const context = useContext(MyContext)

    const processForm = (e) => {
        e.preventDefault()

        if (e.target.name.value.length > 0) {
            context.setName(e.target.name.value)
        }

    }

    return (
        <div className="Form">
            <form onSubmit={processForm}>
                <input type="text" name="name" placeholder="Name..." />
                <input type="submit" value="Update Name" />
            </form>
        </div>
    )
}

export default Form