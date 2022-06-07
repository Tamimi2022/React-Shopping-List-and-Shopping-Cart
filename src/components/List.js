import React from "react"
import ListItem from "./ListItem"


class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [{ id:1, title: "Salt" },
                           { id:2, title: "Oils" },
                           { id:3, title: "Sauces" },
                           { id:4, title: "Apples" },
                           { id:5, title: "Oatmeal" },
                           { id:6, title: "Cinnamon" },
                           { id:7, title: "Almond" },
                           { id:8, title: "Raisins" },
                           { id:9, title: "Chia" } ]
        }
    }
    /*onItemClick(item) {
        console.log("Clicked ${item.id}: ${item.title}");
    } */
        render() {
            return(
                <div>
                    <ul className="app-list">
                        {this.props.items.map((item) => (
                                <ListItem 
                                key={item.id} 
                                item={item} 
                                clickItem={() => this.props.onItemClick(item)} 
                                showQuantities={this.props.showQuantities} />
                        ))}
                    </ul>
                </div>
            )
        
    }
}
export default List
