import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const FeedBacks = () => {

    let StarsElements = ({rating}) => {

        return (
            <>
                <span className="stars__item">{rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span className="stars__item">{rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
            </>

        )
        // return (
        //     <>
        //         <span className={"stars__item" + (rating >= 1 ? " _gold" : "")}></span>
        //         <span className={"stars__item" + (rating >= 2 ? " _gold" : "")}></span>
        //         <span className={"stars__item" + (rating >= 3 ? " _gold" : "")}></span>
        //         <span className={"stars__item" + (rating >= 4 ? " _gold" : "")}></span>
        //         <span className={"stars__item" + (rating >= 5 ? " _gold" : "")}></span>
        //     </>

        // )
    }




    return (
        <div className="feedbacks animated">
            <button className="feedbacks__btn">Залишити відгук</button>
            <div className="feedbacks__items">
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
                <div className="feedbacks__item item-feedback">
                    <div className="item-feedback__name">John</div>
                    <div className="item-feedback__info">
                        <div className="item-feedback__stars stars"><StarsElements rating={3}/></div>
                        <div className="item-feedback__date">9 вересня 2022</div>
                    </div>
                    <div className="item-feedback__text">Дуже професійно і якісно! Було приємно провести чвс. Дякую!</div>
                </div>
            </div>
        </div>
    )
}

export default FeedBacks