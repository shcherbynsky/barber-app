import React from "react"

import { useDispatch, useSelector } from "react-redux";


import { fetchUser, setIsAuth, setUserInfo } from "../../redux/userSlice";
import Auth from "../Auth/Auth";

import ChangePass from "./ChangePass";

const Profile = () => {

    const [isChangePassWindowShown, setIsChangePassWindowShown] = React.useState(false)

    const { isLoading } = useSelector(state => state.schedule)


    // const [newPassValue, setNewPassValue] = React.useState()
    // const [repeatNewPassValue, setRepeatNewPassValue] = React.useState()
    // const [oldPassValue, setOldPassValue] = React.useState()

    const { userInfo, isAuth } = useSelector(state => state.user)

    const dispatch = useDispatch()


    const onLogoutClick = () => {
        sessionStorage.removeItem('token')
        dispatch(setIsAuth(false))
        dispatch(setUserInfo({ id: null, tel: null, name: null }))
    }

    const onChangePassClick = () => {
        setIsChangePassWindowShown(true)
    }







  

    return (
        <>
            {isAuth ?
                !isChangePassWindowShown ?
                    <div className="profile animated">
                        <div className="profile__body">
                            <div className="profile__title">Вітаємо, {userInfo.name}</div>
                        </div>

                        <button onClick={onChangePassClick} className="profile__change-pass-btn btn">Змінити пароль</button>
                        <button onClick={onLogoutClick} className="profile__exit-btn btn">Вийти</button>
                    </div>
                    : <ChangePass
                        userId={userInfo.id}
                        setIsChangePassWindowShown={setIsChangePassWindowShown} />
                : <Auth />}

        </>
    )
}

export default Profile