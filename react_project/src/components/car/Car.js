import css from './car.module.css';


function Car(props) {
    const {car, deleteHandler, updateHandler} = props;


    return (
        <div className={css.Car}>
            <div>
                <p>ID: {car.id}</p>
                <p>Model: {car.model}</p>
                <p>Price: {car.price}</p>
                <p>Year: {car.year}</p>
            </div>
            <div>
                <button onClick={() => updateHandler(car.id)}>update</button>
                <button onClick={() => deleteHandler(car.id)}>delete</button>
            </div>
        </div>
    );
}
export default Car;