import React, { useState } from "react";

const List = (props) => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState(props.lst);

    const listItems = items.map((item, index) =>
        <li key={index}>{item}</li>
    );

    const addNewItem = () => {
        if (newItem) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    }

    return (
        <div className="params">
            <h3>Характеристики</h3>

            <ol className={`params-list ${props.type}`}>
                {listItems}
            </ol>

            <div className="addparam">
                <h3>Добавить характеристику</h3>
                <div className="addparam-form">
                    <input value={newItem} type="text" placeholder="Алюминиевый сплав" onChange={e => setNewItem(e.target.value)} />
                    <button onClick={addNewItem}>Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default List;