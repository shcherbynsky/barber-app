import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  AiFillStar } from "react-icons/ai";
import { setRatingValue } from '../../redux/feedbackSlice';

function Rating() {

    const dispatch = useDispatch()
    const {ratingValue} = useSelector(state => state.feedback)
    
    const ratingEl = [...Array(5)].map((item, index) => {
        const currentValue = index + 1
        return (
            <label key={index} className='rating__label'>
                <input 
                className='rating__input'
                type="radio" 
                value={currentValue}
                onClick={()=> dispatch(setRatingValue(currentValue))}
                />
                <AiFillStar className={'rating__icon' + (currentValue <= ratingValue ? ' _active' : '')}/>
            </label>
        )
    })


    return (
        <div className="rating">
            <div className='rating__body'>
               {ratingEl}
            </div>
        </div>

    )
}

export default Rating