import { useState } from "react"
import MenuButton from "./MenuButton"

const Container = () => {

    const [selected, setSelected] = useState('m');

    function toggle(type) {
        if (type === selected) {
            return setSelected(null);
        }

        setSelected(type);
    }

    return (
        <div className="container">
            <MenuButton title='Горный велосипед' sel={selected} onClick={() => toggle('m')} type='m'></MenuButton>
            <MenuButton title='Женский велосипед' sel={selected} onClick={() => toggle('w')} type='w'></MenuButton>

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam obcaecati pariatur optio odio provident ipsam quaerat aperiam id, consequuntur aspernatur molestiae distinctio magni omnis debitis unde nulla placeat cumque?
            </div>
        </div>
    )
}

export default Container