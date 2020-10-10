import React, { useState } from "react";
import Item from "./item";
const Todo = () => {
    const [itemVal, setItemVal] = useState("");
    const [items, setItem] = useState([]);

    const getItem = e => setItemVal(e.target.value)
    const pushItem = () => {
        if (itemVal !== "") {
            setItem(prevItem => {
                return [...prevItem, itemVal]
            });
            setItemVal("");
        }
        document.querySelector("input").focus();
    }

    const deleteItem = (item) => {
        setItem(prevItems => {
            return prevItems.filter((currItem, i) => {
                return i !== item
            })
        })
    }
    return <React.Fragment>
        <div className="header">
            <h2 className="title">ToDo List</h2>
            <div className="inputArea">
                <input type="text" value={itemVal} onChange={getItem} /><span onClick={pushItem}>+</span>
            </div>
        </div>
        <div className="main-body">
            <ul>
                {items.map((item, i) => <Item key={i} item={item} id={i} remove={deleteItem} />)}
            </ul>
        </div>
    </React.Fragment>
}
export default Todo;