import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

import {authService} from "../../services";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const {register, handleSubmit, reset} = useForm({
        mode: 'all',
    });

    async function submit(user) {
        try {
            await authService.register(user);
            navigate('/login');
        } catch (e) {
            setError(e.response.data?.username);
            reset();
        }
    }

    return (
        <div>

            {error && <h3 style={{color: 'red'}}>{error}</h3>}

            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button type={'submit'}>register</button>
            </form>

        </div>
    );
}

export {RegisterForm}