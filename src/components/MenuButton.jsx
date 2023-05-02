const MenuButton = (props) => {

    let cls = 'menu-button unused';
    if (props.type === props.sel) {
        cls = "menu-button";
    }

    return (
        <button className={cls} onClick={props.onClick}>
            <span>{props.title}</span> <span className="arrow-up"></span>
        </button>
    );
}

export default MenuButton;