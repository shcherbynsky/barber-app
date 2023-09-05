import React from "react"
import { useSelector } from "react-redux"
import Contacts from "./Contacts"
import FeedBacks from "./Feedbacks"
import Information from "./Information"

const About = () => {
    let { activeAboutMenuItem } = useSelector(state => state.header)

    return (
        <div className="about animated">
            <div className="about__container">
                {activeAboutMenuItem === 0 && <Information />}
                {activeAboutMenuItem === 1 && <FeedBacks />}
                {activeAboutMenuItem === 2 && <Contacts />}
            </div>
        </div>
    )
}

export default About