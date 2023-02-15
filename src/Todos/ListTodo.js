import React from "react";
import AddTodo from "./AddTodo";
import './Todo.scss';

class ListTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listTodos: [{ id: 1, title: 'Học React' }, { id: 2, title: 'Chơi Game' }, { id: 3, title: 'Đọc sách' }],
            rowSelected: {}
        }
    }

    addNewTodo = (todo) => {
        this.setState({
            //Spread syntax (...)
            listTodos: [todo, ...this.state.listTodos]
        })
    }

    handleClickDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
    }

    ClickCompleteTodo = (e) => {
        let currentList = this.state.listTodos;
        currentList = currentList.filter(item => item.id === e.id);

        //includes Dùng để kiểm tra một chuỗi có thể được tìm thấy trong một chuỗi khác hay không
        currentList[0].title.includes('(Complete)') ?
            currentList[0].title = currentList[0].title + "" :
            currentList[0].title = currentList[0].title + " (Complete)";

        this.setState({
            rowSelected: currentList

        })
    }

    isEmptyObj = (o) => {
        if (Object.keys(o).length === 0) {
            return true
        } else {
            return false
        }
    }

    render() {
        let listTodos = this.state.listTodos
        let rowSelected = this.state.rowSelected
        return (
            <>
                <AddTodo addNewTodo={this.addNewTodo} />

                <table >
                    <tbody>
                        {listTodos && listTodos.length > 0 && listTodos.map((item) => {
                            return (
                                <tr key={item.id}
                                    onClick={() => this.ClickCompleteTodo(item)}

                                >
                                    <td >
                                        <div className="todo-child">
                                            <div className="child"
                                                style={this.isEmptyObj(rowSelected) ? {
                                                    backgroundColor: 'while'
                                                } :

                                                    rowSelected[0].id === item.id ?
                                                        { backgroundColor: ' rgb(0, 179, 42)' }
                                                        :
                                                        { backgroundColor: 'while' }
                                                }
                                            >
                                                <div>
                                                    {item.title}

                                                </div>
                                                <div className="bnt-X">
                                                    <button type="button"
                                                        onClick={() => this.handleClickDeleteTodo(item)}>X</button>
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>




            </>
        )
    }
}
export default ListTodo;