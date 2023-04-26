const MenuButton = (props) => {
    let sign = ' + ';
    let cls = 'menu-button unused';
    if (props.type === props.selected) {
        sign = '-';
        cls = 'menu-button';
    }

    return (
        <button className={cls} onClick={props.onClick}>
            {props.title} {sign}
        </button>
    );
}

export default MenuButton;