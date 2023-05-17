import { useState } from "react"
import "./container.css"
import MenuButton from "./MenuButton"
import Content from "./Content";

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
            {/* For mobile version */}
            <Content cls={selected === 'm' ? 'content show mob' : 'content'} type='m'></Content>

            <MenuButton title='Женский велосипед' selected={selected} type="w" onClick={() => toggle('w')}></MenuButton>
            <Content cls={selected === 'w' ? 'content show' : 'content'} type="w"></Content>

            {/* For a desktop version */}
            <Content cls={selected === 'm' ? 'content show desk' : 'content'} type="m"></Content>
        </div>
    )
}

export default Container