import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {Car, CarForm} from "../../components";
import {carActions} from "../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.carsReducer);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    function deleteCarHandler(id) {
        dispatch(carActions.deleteCar({id}));
    }
    function updateCarHandler(car) {
        console.log(car);
        dispatch(carActions.addCarForUpdate(car));
    }

    return (
        <div>
            <CarForm/>
            <div>
                {cars.map(car => <Car key={car.id} car={car} deleteCarHandler={deleteCarHandler}
                                      updateCarHandler={updateCarHandler}/>)}
            </div>
        </div>
    );
}
export {Cars}