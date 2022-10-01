import {useForm} from 'react-hook-form';


const DogForm = ({onSubmit}) => {
    const {register, handleSubmit, reset} = useForm();


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor={'dog'}>Add dog : </label>
                    <input placeholder={'dog name'} {...register('dog')}/>
                    <button>save</button>
                </form>
            </div>
        </div>
    );
}
export {DogForm}