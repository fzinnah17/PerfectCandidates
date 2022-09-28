import React from 'react'
import './ProfileCards.css';
import leftArrow from "/Volumes/Seagate/Github/PerfectCandidates/client/src/icons/left-arrow.svg";
import rightArrow from "/Volumes/Seagate/Github/PerfectCandidates/client/src/icons/right-arrow.svg";
 //props are passed inside {}
export default function ButtonSlider({direction, moveSlide}) {
    return (

        <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    )
}
