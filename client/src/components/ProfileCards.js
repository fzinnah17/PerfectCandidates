import React, {useState} from 'react';
import './ProfileCards.css';
import ButtonSlider from './ButtonSlider';
import profileSlider from './profileSlider';


export default function ProfileCards() {

    // we are starting the slide from the first index

    const [slideIndex, setSlideIndex] = useState(1); 
    // and it starts from the first slide

    // next slide: the concept is if the slide reaches the end of the listed resumes then it will go back to previous

    //nextslide has the button function in it
    const nextSlide = () => {
        if (slideIndex !== profileSlider.length)
        {
            setSlideIndex(slideIndex + 1);

        }
        else if (slideIndex === profileSlider.length)
        {
            setSlideIndex(1);
        }
    }


    // previous slide: the concept is if the slide reaches the beginning of the list then it will come back to the end of the list

    const prevSlide = () => {
        if (slideIndex !== 1)
        {
            setSlideIndex(slideIndex - 1);

        }
        else if (slideIndex === 1)
        {
            setSlideIndex(profileSlider.length);
        }

    }
    //paramter is the index

    const moveDot = i => {
        setSlideIndex(i)

    }

// these slides work as props, so we will have something called moveslide that will be in action after we click on the buttons and that moveslide will work with the function put inside the button. this moveslide will be passed inside the button slider js file as well.
// moveslide is the function, and then direction those are passed inside button slider as props
//obj.id is the reference from the profile slider js file
    return (
        <div className="container-slider">
            {
                profileSlider.map((obj, i) => {
                    return (
                        <div key = {obj.id} className= {slideIndex === i + 1 ? "slide active-anim" : "slide"}> 
                            <img src = {process.env.PUBLIC_URL + `/Imgs/img${i+1}.jpg`}/>
                        </div>
                    )
                })
            }
            <ButtonSlider moveSlide = {nextSlide} direction = {"next"}/>
            <ButtonSlider moveSlide = {prevSlide} direction = {"prev"} />

            <div className='container-dots'>
                {
                    Array.from({length: 5}).map((item, i) => (
                        <div onClick = {() => moveDot(i+1)} className={slideIndex === i + 1 ? "dot active" : "dot"}></div>
                    ))
                }

            </div>
        </div>

    )
}

