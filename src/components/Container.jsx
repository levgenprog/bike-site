import { useState } from "react"
import MenuButton from "./MenuButton"
import Content from "./Content";

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

            <Content></Content>
        </div>
    )
}

export default Container