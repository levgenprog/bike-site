const MenuButton = (props) => {
    let arrow = 'arrow-up';
    let cls = 'menu-button unused';
    if (props.type === props.selected) {
        arrow = 'arrow-down';
        cls = 'menu-button';
    }

    return (
        <button className={cls} onClick={props.onClick}>
            <span>{props.title}</span> <span className={arrow}></span>
        </button>
    );
}

export default MenuButton;