import {memo} from 'react';

const Todos = memo((props) => {
    console.log('Todos component loaded'); //срабатывает как при обновлении Todo так и при обновлении Main (countInc) что ненужно! Используем useCallback в Main и
                                            // обворачиваем Todos в фу-ю memo

    const {addTodo, todos} = props;

    return (
        <div>
            {todos.map((todo, index) =>
                <p key={index}>{todo}</p>
            )}
            <button onClick={addTodo}>addTodo</button>
        </div>
    );
})
export {Todos}