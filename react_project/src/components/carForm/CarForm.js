import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = (props) => {

    const {setCars, carForUpdate, setCarForUpdate} = props;

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });

    useEffect(() => {

        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }

    }, [carForUpdate, setValue]);

    async function submit(car) {

        try {
            if (carForUpdate) {
                const {data} = await carService.updateById(carForUpdate.id, car);
                setCars(cars => {
                    const foundCar = cars.find(car => car.id === carForUpdate.id);
                    Object.assign(foundCar, data);
                    setCarForUpdate(null);
                    return [...cars];
                });
            } else {
                const {data} = await carService.createCar(car);
                setCars(cars => [...cars, data]);
            }

            reset();

        } catch (e) {
            console.log(e);
        }

    }

    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'model'} {...register('model')}/>
                {errors.model && <span style={{color: 'red'}}>{errors.model.message}</span>}
                <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                {errors.price && <span style={{color: 'red'}}>{errors.price.message}</span>}
                <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span style={{color: 'red'}}>{errors.year.message}</span>}
                <button disabled={!isValid} type={'submit'}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>

    );
}

export {CarForm}