import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../http/userAPI";
import { fetchUser, setIsAuth, setUserInfo } from "../../redux/userSlice";
import Auth from "../Auth/Auth";
import Loader from "../Loader";

const Profile = () => {

    // const [isLoading, setIsLoading] = React.useState(true)

    const { userInfo, isAuth } = useSelector(state => state.user)

    const dispatch = useDispatch()
    



    const onLogoutClick = () => {
        sessionStorage.removeItem('token')
        dispatch(setIsAuth(false))
        dispatch(setUserInfo({id: null, tel: null, name: null}))
    }

    
    return (
        isAuth ?
        <div className="profile animated">
            <div className="profile__body">
                <div className="profile__title">Вітаємо, {userInfo.name}</div>
            </div>

            <button onClick={onLogoutClick} className="prufile__exit-btn btn">Вийти</button>
        </div>
        : <Auth />
    )
}

export default Profile