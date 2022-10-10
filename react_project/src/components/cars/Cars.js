import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {Car} from "../car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.carsReducer);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    return (
        <div>
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
}
export {Cars}