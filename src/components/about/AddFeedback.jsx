import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addFeedbacks } from '../../redux/feedbackSlice';
import Rating from './Rating'


function AddFeedback({ setIsAddFeedbackWindowShown }) {

    
    const [feedbackText, setFeedbackText] = React.useState('')
    const { ratingValue, errorMessage } = useSelector(state => state.feedback)
    const { userInfo } = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const [isPopupShown, setIsPopupShown] = React.useState(false)
    

    const onAddFeedbackClick = (e) => {
        e.preventDefault()
        dispatch(addFeedbacks({ rating: ratingValue, text: feedbackText, userId: userInfo.id }))
        setIsPopupShown(true)
    }



    return (

        !isPopupShown ?
        <div className='addfeedback animated'>
            <div className="addfeedback__body">
                <div className="addfeedback__title">Залишити відгук</div>
                <div className="addfeedback__rating">
                    <Rating />
                </div>
                <textarea
                    className="addfeedback__textarea"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                >

                </textarea>

                <button 
                onClick={(e) => onAddFeedbackClick(e)} 
                className={'changepass__btn btn' + (!feedbackText || !ratingValue ? ' _blocked' : '')}>
                    Залишити відгук
                    </button>
                <button onClick={() => setIsAddFeedbackWindowShown(false)} className="changepass__btn btn">Закрити</button>
            </div>
        </div>
        :
        <div className="addfeedback__popup popup">
                        <div className="popup__body">
                            <div className="popup__title">{!errorMessage ? 'Вітаємо' : 'Помилка!'}</div>
                            <div className="popup__message">{errorMessage ? errorMessage : 'Ваш відгук було додано!'}</div>
                            <button type="button" onClick={() => setIsPopupShown(false)} className="changepass__btn btn">Закрити</button>
                        </div>

                    </div>
    )
}

export default AddFeedback