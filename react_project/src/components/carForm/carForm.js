import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {joiResolver} from '@hookform/resolvers/joi';

import {carActions} from "../../redux";
import {carValidator} from "../../validators";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carsReducer);


    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    function onSubmit(car) {
        if (carForUpdate) {
            let id = carForUpdate.id;
            dispatch(carActions.sendCarForUpdate({id, car}));
            dispatch(carActions.addCarForUpdate(null));
        }
        else {
            dispatch(carActions.addCar({car}));
        }
        reset();
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={'model'} {...register('model')}/>
                    {errors.model && <span>{errors.model.message}</span>}
                    <input placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                    {errors.price && <span>{errors.price.message}</span>}
                    <input placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                    {errors.year && <span>{errors.year.message}</span>}
                    <button disabled={!isValid}>{carForUpdate? 'update' : 'save'}</button>
                </form>
            </div>
        </div>
    );
}
export {CarForm}