import {useState, useEffect} from 'react';

import {carsService} from '../../services';
import Car from '../car/Car';
import CarForm from '../carForm/CarForm';


function Cars() {
    const [cars, setCars] = useState([]);
    const [updatedCar, setUpdatedCar] = useState(null);

    useEffect(()=>{
        carsService.getAll()
            .then(response => setCars(response.data));
    }, []);

    async function deleteHandler(id) {
        await carsService.deleteById(id);
        const carIndex = cars.findIndex(item => item.id === id);
        cars.splice(carIndex, 1);
        setCars([...cars]);
    }
    function updateHandler(id) {
        const car = cars.find(item => item.id === id);
        console.log(car);
        setUpdatedCar(car);
    }

    return (
        <div>
            <CarForm cars={cars} setCars={setCars} updatedCar={updatedCar} setUpdatedCar={setUpdatedCar}/>
            <div>
                {cars.map(item => <Car key={item.id} car={item} deleteHandler={deleteHandler} updateHandler={updateHandler}/>)}
            </div>
        </div>
    );
}
export default Cars;