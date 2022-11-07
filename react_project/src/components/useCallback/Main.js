import {useCallback, useState} from "react";
import {Todos} from "./Todos";

const Main = () => {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    function countInc() {
        setCount(prev => prev + 1);
    }
    // function addTodo() {
    //     setTodos([...todos, 'New todo']);
    // }
    const addTodo = useCallback(() => {
        setTodos([...todos, 'New todo']);
    }, [todos]);

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr/>
            <h1>Count : {count}</h1>
            <button onClick={countInc}>countInc</button>
        </div>
    );
}
export {Main}