const List = (props) => {
    let items;

    if (props.type === 'm') {
        items = ["Двойной обод", "Алюминиевый сплав", "Колеса диаметром 26 дюймов", "Покрышки 26х1,95"];
    } else {
        items = ['Стальная рама', 'Жесткая вилка', 'Колеса диаметром 24 дюймов', '7 скоростей'];
    }

    const listItems = items.map((item) =>
        <li>{item}</li>
    );

    return (
        <div className="params">
            <h3>Характеристики</h3>

            <ol className={'params-list ' + props.type}>
                {listItems}
            </ol>
        </div>
    );
}

export default List;