const MenuButton = (props) => {

    let cls = 'menu-button unused';
    let arr = 'arrow-down';
    if (props.type === props.sel) {
        cls = "menu-button";
        arr = 'arrow-up'
    }

    return (
        <button className={cls} onClick={props.onClick}>
            <span>{props.title}</span> <span className={arr}></span>
        </button>
    );
}

export default MenuButton;