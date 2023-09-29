import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { useForm } from 'react-hook-form'
import { changeUserPass } from "../../http/userAPI";
import Loader from "../Loader";

function ChangePass({ userId, setIsChangePassWindowShown }) {


    const [isNewPassVisible, setIsNewPassVisible] = React.useState(false)
    const [isRepeatPassVisible, setIsRepeatPassVisible] = React.useState(false)
    const [isOldPassVisible, setIsOldPassVisible] = React.useState(false)

    const [isLoading, setIsLoading] = React.useState(false)
    const [isPopupShown, setIsPopupShown] = React.useState(false)
    const [isPassChanged, setIsPassChanged] = React.useState(false)
    const [erorMessage, setErrorMessage] = React.useState('')


    const {
        register,
        formState: {
            errors,
            isDirty,
            dirtyFields
        },
        handleSubmit,
        watch,
        reset,
    } = useForm({
        mode: 'all',
    })


    const onPopupCloseClick = ()=> {
        setIsChangePassWindowShown(false)
        setIsPopupShown(false)
        setIsPassChanged(false)
        setErrorMessage('')
    }

    const onFormSubmit = async (data) => {
        setIsLoading(true)
        const { newPass, oldPass } = data

        try {
            const userData = await changeUserPass({ newPass, oldPass, userId })
            setIsLoading(false)
            setIsPassChanged(true)
            setIsPopupShown(true)
        } catch (error) {
            setIsLoading(false)
            setErrorMessage(error.response.data.message)
            setIsPassChanged(false)
            setIsPopupShown(true)
        }
    }

    if (isLoading) {
        return <Loader />
    }


    return (
        <div className="changepass animated">
            <div className="changepass__body">
                {!isPopupShown ?
                    <>
                        <div className="changepass__title">Зміна пароля</div>

                        <form onSubmit={handleSubmit(onFormSubmit)} className="changepass__form form">

                            <label>
                                Введіть новий пароль:
                                <div className="input">
                                    <span className="input__ok-icon">{!errors?.newPass && dirtyFields.newPass && <AiOutlineLike />}</span>
                                    <input className='input__textfield' type={isNewPassVisible ? "text" : "password"}
                                        {...register('newPass', {
                                            required: "Поле обов'язкове для заповнення",
                                            minLength: {
                                                value: 6,
                                                message: 'Пароль має бути не меньш ніж 6 символів!'
                                            }
                                        })}
                                    />
                                    <span onClick={() => setIsNewPassVisible(!isNewPassVisible)} className="input__eye">{isNewPassVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                                </div>
                                <div className="input__err">{errors?.newPass && errors.newPass.message}</div>

                            </label>

                            <label>
                                Повторить новий пароль:
                                <div className="input">
                                    <span className="input__ok-icon">{!errors?.repeatNewPass && dirtyFields.repeatNewPass && <AiOutlineLike />}</span>
                                    <input className='input__textfield' type={isRepeatPassVisible ? "text" : "password"}
                                        {...register('repeatNewPass', {
                                            required: "Поле обовйязкове для заповнення",
                                            minLength: {
                                                value: 6,
                                                message: 'Пароль має бути не меньш ніж 6 символів!'
                                            },
                                            validate: (val) => {
                                                if (watch('newPass') != val) {
                                                    return "Паролі не співпадають!";
                                                }
                                            }
                                        })}
                                    />

                                    <span onClick={() => setIsRepeatPassVisible(!isRepeatPassVisible)} className="input__eye">{isRepeatPassVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                                </div>
                                <div className="input__err">{errors?.repeatNewPass && errors.repeatNewPass.message}</div>
                            </label>

                            <label>
                                Введить старий пароль:
                                <div className="input">
                                    <span className="input__ok-icon">{!errors?.oldPass && dirtyFields.oldPass && <AiOutlineLike />}</span>
                                    <input className='input__textfield' type={isOldPassVisible ? "text" : "password"}
                                        {...register('oldPass', {
                                            required: "Поле обовйязкове для заповнення",
                                            minLength: {
                                                value: 6,
                                                message: 'Пароль має бути не меньш ніж 6 символів!'
                                            }
                                        })}
                                    />

                                    <span onClick={() => setIsOldPassVisible(!isOldPassVisible)} className="input__eye">{isOldPassVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                                </div>
                                <div className="input__err">{errors?.oldPass && errors.oldPass.message}</div>
                            </label>
                            <button type="submit" className="changepass__btn btn">Змінити пароль</button>
                        </form>
                        <button type="submit" onClick={() => setIsChangePassWindowShown(false)} className="changepass__btn btn">Закрити</button>
                    </>
                    :
                    <div className="changepass__popup popup-changepass popup">
                        <div className="popup__body">
                            <div className="popup__title">{isPassChanged ? 'Пароль змінено!' : 'Помилка!'}</div>
                            <div className="popup__message">{!isPassChanged && erorMessage}</div>
                            <button type="submit" onClick={() => onPopupCloseClick()} className="changepass__btn btn">Закрити</button>
                        </div>

                    </div>

                }



            </div>
        </div>
    )
}

export default ChangePass