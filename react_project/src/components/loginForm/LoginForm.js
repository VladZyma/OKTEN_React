import {useForm} from 'react-hook-form';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useState} from 'react';

import {authService} from "../../services";

const LoginForm = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const [query,] = useSearchParams();

    const {register, handleSubmit, reset} = useForm();

    async function submit(user) {

        try {
            const {data} = await authService.login(user);
            authService.setTokens(data);
            navigate('/cars');
        } catch (e) {
            setError(e.response.data?.detail);
            reset();
        }

    }

    return (

        <div>

            {error && <h3 style={{color: 'red'}}>{error}</h3>}
            {query.has('expSession') && <h3 style={{color: 'red'}}>Session end!!!</h3>}

            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button type={'submit'}>login</button>
            </form>

        </div>

    );
}

export {LoginForm}