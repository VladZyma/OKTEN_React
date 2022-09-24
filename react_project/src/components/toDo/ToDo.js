import css from './toDo.module.css';


function ToDo(props) {
    const {toDo: {userId, id, title, completed}} = props;
    return (
        <div className={css.ToDo}>
            <h4>User: {userId}</h4>
            <p>To Do: {id} - {title}</p>
            <p>Completed: {completed ? 'true' : 'false'}</p>
        </div>
    );
}
export default ToDo;