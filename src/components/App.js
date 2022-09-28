import Wrapper from "./Wrapper"
import Nav from "./Navbar"
import FormWrapper from "./FormWrapper"
import Form from "./Form"
import MyContext from "./MyContext"

import { useContext, useState } from "react"

const App = (props) => {

    const [name, setName] = useState('Unnamed User')

    return (
        <div className="App">
            <MyContext.Provider value={{name, setName}}>
                <Wrapper>
                    <Nav />
                    <FormWrapper>
                        <Form />
                    </FormWrapper>
                </Wrapper>
            </MyContext.Provider>
        </div>
    )
}

export default App