import {useForm} from 'react-hook-form';

const CatForm = (props) => {
    const {onSubmit} = props;

    const {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor={'cat'}>Add cat : </label>
                <input placeholder={'cat name'} {...register('cat')}/>
                <button>save</button>
            </form>
        </div>
    );
}
export {CatForm}