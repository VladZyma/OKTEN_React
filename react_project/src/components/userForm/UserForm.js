import {useForm} from 'react-hook-form';

import {usersService} from "../../services/users.api.service";

export default function UserForm(props) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
    });

    const {setUsers} = props;

    function onSubmit(user) {
        usersService.createUser(user)
            .then(response => {
                setUsers(users => [...users, response.data]);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'name'} {...register('name')} />
                <input placeholder={'phone'} {...register('phone', {valueAsNumber: true})} />
                <input placeholder={'email'} {...register('email')} />
                <input placeholder={'city'} {...register('address.city')} />
                <input placeholder={'street'} {...register('address.street')} />
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
}