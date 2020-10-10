import React from "react";
const Item = (props) => {
    return <React.Fragment>
        <li><span role="img" aria-label="cross" onClick={() => { props.remove(props.id) }}>❌</span>{props.item}</li>
    </React.Fragment>
}
export default Item;