import { useState } from "react"
import MenuButton from "./MenuButton"

const Container = () => {

    const [selected, setSelected] = useState('m');

    return (
        <div className="container">
            <MenuButton title='Горный велосипед' selected={selected}></MenuButton>
            <MenuButton title='Женский велосипед' selected={selected}></MenuButton>

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam obcaecati pariatur optio odio provident ipsam quaerat aperiam id, consequuntur aspernatur molestiae distinctio magni omnis debitis unde nulla placeat cumque?
            </div>
        </div>
    )
}

export default Container