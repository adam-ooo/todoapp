import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";



class ToDoList extends Component {
    state = {
        newTodo: '',
        items: [],
    }

    addItem = e => {
      const newItem = {
          text: this.state.newTodo,
          key: Date.now()
      };
  
      this.setState({
          items: prevState.items.concat(newItem)
      });
    }  

    deleteItem = key => {
        console.log("Key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);
      
      
        var filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filteredItems
        });
    }

    changeInput(newTodo) {
        this.setState({newTodo})
    }
    render()  {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input
                  onChange={e => this.changeInput(e.target.value)}
                  value={this.state.newTodo}
                  placeholder="enter task">
                </input>
                <button disabled={!this.state.newItem} type="submit">add</button>
              </form>
            </div>
            <ul className="theList">
              {
                this.state.items.map(item => (
                  <ToDoItem {...item} deleteFn={this.deleteItem} />
                ))
              }
            </ul>
          </div>
        );
    }
}

export default ToDoList;