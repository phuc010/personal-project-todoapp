import React from "react";
class AddTodo extends React.Component {
    state = {
        title: ""
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAddTodo = () => {
        //if(undefined/null/empty) =>false
        if (!this.state.title) {
            alert("Please enter Todo")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ""
        })

    }
    enterTodo = (e) => {
        if (e.key === 'Enter') {
            return this.handleClickAddTodo();
        } else { return "" }
    }
    render() {
        let { title } = this.state;
        return (
            <>
                <div>
                    <h1>To-Do List </h1>
                    <p>Enter text into the input field to add items to your list</p>
                    <p>Click the "X" to remove the item from your list</p>
                    <p>Click the item to mark it as complete. </p>

                </div>

                <div className="input-add-todo">
                    <input type='text' placeholder="Input to do" value={title} onKeyDown={(e) => this.enterTodo(e)} onChange={(event) => this.handleOnChangeTitle(event)} />
                    <button type='button'
                        onClick={() => this.handleClickAddTodo()}>Add <i className="fas fa-file-plus"></i></button>

                </div>
            </>
        );
    }
}

export default AddTodo;