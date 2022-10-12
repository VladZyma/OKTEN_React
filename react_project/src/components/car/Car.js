
const Car = (props) => {
    const {car, car: {id, model, price, year}} = props;
    const {deleteCarHandler, updateCarHandler} = props;


    return (
        <div>
            <div>
                <p>ID : {id}</p>
                <p>MODEL : {model}</p>
                <p>PRICE : {price}</p>
                <p>YEAR : {year}</p>
                <button onClick={() => updateCarHandler(car)}>update</button>
                <button onClick={() =>deleteCarHandler(id)}>delete</button>
            </div>
            <hr/>
        </div>
    );
}
export {Car}