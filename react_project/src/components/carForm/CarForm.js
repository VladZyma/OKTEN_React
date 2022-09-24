import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators";
import {carsService} from "../../services";

function CarForm(props) {
    const {cars, setCars, updatedCar, setUpdatedCar} = props;

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });

    useEffect(() => {
        if (updatedCar) {
            setValue('model', updatedCar.model, {shouldValidate: true});
            setValue('price', updatedCar.price, {shouldValidate: true});
            setValue('year', updatedCar.year, {shouldValidate: true});
        }

    }, [updatedCar, setValue]);


    async function onSubmit(car) {
        if (updatedCar) {
           const {data} = await carsService.updateById(updatedCar.id, car);
           setCars((cars) => {
               const findCar = cars.find(item => item.id === updatedCar.id);
               Object.assign(findCar, data)
               setUpdatedCar(null);
               reset();
               return ([...cars]);
           })
        }
        else {
            const {data} = await carsService.addCar(car)
            setCars(cars => [...cars, data]);
            reset();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'model'} {...register('model')} />
                    {errors.model && <span>{errors.model.message}</span>}
                <input placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                    {errors.price && <span>{errors.price.message}</span>}
                <input placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                    {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{updatedCar ? 'update' : 'save'}</button>
            </form>
        </div>
    );
}
export default CarForm;