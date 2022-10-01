import css from './Cat.module.css'
const Cat = ({cat, index, deleteHandler}) => {

    return (
        <div>
            <div className={css.Cat}>
                <h3>{cat}</h3>
                <button onClick={() => deleteHandler(index)}>delete</button>
            </div>
        </div>
    );
}
export {Cat}