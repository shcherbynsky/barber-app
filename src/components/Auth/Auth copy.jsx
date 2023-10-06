import React from 'react'
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form'
import { login, registration } from '../../http/userAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setUserInfo } from '../../redux/userSlice';
import Loader from '../Loader';

const Auth = () => {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = React.useState(false)

    const [isLogin, setIsLogin] = React.useState(true)
    const [nameValue, setNameValue] = React.useState()
    const [phoneValue, setPhoneValue] = React.useState()
    const [passwordValue, setPasswordValue] = React.useState()

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })



    const handlePhoneChange = (e) => {
        setPhoneValue(e.target.value)
    }
    const onLoginClick = () => {
        reset()
        setIsLogin(true)
    }
    const onRegisterClick = () => {
        reset()
        setIsLogin(false)
    }

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            let userData
            if (isLogin) {
                userData = await login(data.tel, data.password)
            } else {
                userData = await registration(data.name, data.tel, data.password)
            }
            dispatch(setUserInfo({ id: userData.id, tel: userData.tel, name: userData.name }))
            dispatch(setIsAuth(true))
            setIsLoading(false)

        } catch (error) {
            // console.log('error = ', error);
            alert(error.response.data.message)
            setIsLoading(false)
        }


    }



    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="auth">
            <div className="auth__body">
                <h2 className="auth__title">{isLogin ? 'Вхід' : 'Реєстрація'}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="auth__form form">
                    {!isLogin &&
                        <label>
                            Ім'я:
                            <div className="form__item">
                                <input className='input input-name' type="text" value={nameValue} onChange={e => setNameValue(e.target.value)}
                                    {...register('name', {
                                        required: "Поле обовйязкове для заповнення",
                                    })}
                                />
                            </div>

                            <div className="input-err">{errors?.name && errors.name.message}</div>
                        </label>
                    }
                    <label>
                        Телефон:
                        <div className="form__item">
                            <span className="tel-prefix">+380</span>
                            <input className='input input-tel' type="number" value={phoneValue} onChange={e => handlePhoneChange(e)}
                                {...register('tel', {
                                    required: "Поле обовйязкове для заповнення",
                                    minLength: {
                                        value: 9,
                                        message: "Перевірте правільність номеру телефона"
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: "Перевірте правільність номеру телефона"
                                    }
                                })}
                            />
                        </div>
                        <div className="auth__input-err">{errors?.tel && errors.tel.message}</div>
                    </label>
                    <label>
                        Пароль:
                        <div className="form__item">
                            <input className='input input-pass' type="password" value={passwordValue} onChange={e => console.log(e.target.value)}
                                {...register('password', {
                                    required: "Поле обовйязкове для заповнення",
                                    minLength: {
                                        value: 6,
                                        message: "Пароль має бути довше 6 символів!"
                                    }
                                })}
                            />
                        </div>
                        <div className="auth__input-err">{errors?.password && errors.password.message}</div>
                    </label>
                    <input type="submit" value={isLogin ? "Увійти" : "Зареєструватись"} className="auth__btn" />
                </form>
                {isLogin ?
                    <div className="auth__action-string">
                        Немає акаунту? <span onClick={onRegisterClick}>Зареєструватись</span>
                    </div>
                    :
                    <div className="auth__action-string">
                        Вже зареєстровані?
                        <span onClick={onLoginClick}>Увійти</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Auth


