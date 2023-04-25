const MenuButton = (props) => {
    let sing = '+';
    return (
        <button className="menu-button ">
            {props.title} {sing}
        </button>
    );
}

export default MenuButton;