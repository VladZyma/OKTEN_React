import {useState, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {carService} from "../../services";
import {Car, CarForm} from "../../components";


const CarsList = () => {

    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        carService.getAll(query.get('page'))
            .then(({data: res}) => {
                setCars(res.data);
                setPrev(res.prev);
                setNext(res.next);
            });

    }, [query]);


    async function deleteCar(id) {

        try {
            await carService.deleteCarById(id)
            setCars(cars => {
                const carIndex = cars.findIndex(car => car.id === id);
                cars.splice(carIndex, 1);
                return [...cars];
            });
        } catch (e) {
            console.log(e);
        }

    }
    function updateCar(id) {
        const foundCar = cars.find(car => car.id === id);
        setCarForUpdate(foundCar);
    }


    function pageDecrement() {
        setQuery(value => ({page: value.get('page') - 1 }));
    }

    function pageIncrement() {
        setQuery(value => ({page: +value.get('page') + 1 }));
    }



    return (
        <div>
            <CarForm cars={cars} setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} deleteCar={deleteCar} updateCar={updateCar}/>)}
            <button disabled={!prev} onClick={pageDecrement}>prev</button>
            <button disabled={!next} onClick={pageIncrement}>next</button>
        </div>
    );
}

export {CarsList}