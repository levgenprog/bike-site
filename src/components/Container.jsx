import { useState } from "react"
import MenuButton from "./MenuButton"

const Container = () => {

    const [selected, setSelected] = useState('m');

    const toggle = (type) => {
        if (selected === type) {
            return setSelected(null);
        }
        setSelected(type);
    }

    return (
        <div className="container">
            <MenuButton title='Горный велосипед' selected={selected} type="m" onClick={() => toggle('m')}></MenuButton>
            <div className={selected === 'm' ? 'content show mob' : 'content'}>
                MALE <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam obcaecati pariatur optio odio provident ipsam quaerat aperiam id, consequuntur aspernatur molestiae distinctio magni omnis debitis unde nulla placeat cumque?
            </div>
            <MenuButton title='Женский велосипед' selected={selected} type="w" onClick={() => toggle('w')}></MenuButton>
            <div className={selected === 'w' ? 'content show' : 'content'}>
                FEMALE <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam obcaecati pariatur optio odio provident ipsam quaerat aperiam id, consequuntur aspernatur molestiae distinctio magni omnis debitis unde nulla placeat cumque?
            </div>
            <div className={selected === 'm' ? 'content show desk' : 'content'}>
                MALE <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam obcaecati pariatur optio odio provident ipsam quaerat aperiam id, consequuntur aspernatur molestiae distinctio magni omnis debitis unde nulla placeat cumque?
            </div>
        </div>
    )
}

export default Container