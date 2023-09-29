import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacks } from "../../redux/feedbackSlice";
import Loader from "../Loader";
import AddFeedback from "./AddFeedback";

const FeedBacks = () => {
    
    const monthItems = [
        'Січня',
        'Лютого',
        'Березня',
        'Квітня',
        'Травня',
        'Червня',
        'Липня',
        'Серпня',
        'Вересня',
        'Жовтня',
        'Листопада',
        'Грудня']

    const dispatch = useDispatch()
    const { feedbackData, isLoading } = useSelector(state => state.feedback)
    const [isAddFeedbackWindowShown, setIsAddFeedbackWindowShown] = React.useState(false)


    React.useEffect(() => {
        dispatch(fetchFeedbacks())
    }, [])

    let StarsElements = ({ rating }) => {

        return (
            <>
                <span className="stars__item">{rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
            </>

        )
    }

    const feedbackElements = feedbackData ?
        feedbackData.map(item => {
            const dateEl = item.date
            const year = dateEl.split('-')[0]
            const month = parseInt(dateEl.split('-')[1])
            const day = dateEl.split('-')[2]
            const date = day + ' ' + monthItems[month] + ' ' + year
            return (
                <div key={item.id} className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">{item['user.name']}</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={item.rating} /></div>
                        <div className="item-feedback__date">{date}</div>
                    </div>
                    <div className="item-feedback__text">{item.content}</div>
                </div>
            )

        }) : []


    if (isLoading) {
        return <Loader />
    }

    return (
        isAddFeedbackWindowShown ?
            <AddFeedback 
            setIsAddFeedbackWindowShown={setIsAddFeedbackWindowShown}
            />
            :
            <div className="feedbacks animated">
                <button className="feedbacks__btn" onClick={() => setIsAddFeedbackWindowShown(true)}>Залишити відгук</button>
                {feedbackElements.length ?
                    <div className="feedbacks__items">
                        {feedbackElements}
                    </div>
                    : <div className="feedbacks__empty">Відгуків ще нема, Ви можете стати першим 😉</div>}
            </div>
    )
}

export default FeedBacks