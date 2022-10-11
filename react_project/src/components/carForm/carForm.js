import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carsReducer);
    console.log(carForUpdate);

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    function onSubmit(id,car) {
        if (carForUpdate) {
            dispatch(carActions.sendCarForUpdate({id,car}))
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
                    <input placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                    <input placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                    <button disabled={!isValid}>{carForUpdate? 'update' : 'save'}</button>
                </form>
            </div>
        </div>
    );
}
export {CarForm}