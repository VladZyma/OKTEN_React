import css from './Dog.module.css'

const Dog = (props) => {
    const {dog, index, deleteHandler} = props;

    return (
        <div>
            <div className={css.Dog}>
                <h3>{dog}</h3>
                <button onClick={() => deleteHandler(index)}>delete</button>
            </div>
        </div>
    );
}
export {Dog}