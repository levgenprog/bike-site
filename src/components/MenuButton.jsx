const MenuButton = (props) => {
    let sing = '+';

    let cls = 'menu-button unused';
    if (props.type === props.sel) {
        cls = "menu-button";
    }

    return (
        <button className={cls} onClick={props.onClick}>
            {props.title} {sing}
        </button>
    );
}

export default MenuButton;