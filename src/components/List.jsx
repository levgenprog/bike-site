const List = () => {
    const items = ["Двойной обод", "Алюминиевый сплав", "Колеса диаметром 26 дюймов", "Покрышки 26х1,95"];

    const listItems = items.map((item) =>
        <li>{item}</li>
    );

    return (
        <div className="params">
            <h3>Характеристики</h3>

            <ol className="params-list">
                {listItems}
            </ol>
        </div>
    );
}

export default List;