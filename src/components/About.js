/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

export default function About(props){
    useEffect(()=>{
        props.setProgress(10);
        document.title = `News Monkey - About`;
        props.setProgress(100);
    }, [])

    return (
    <div className="container my-3">
        <h2 className='text-center my-3'>About NewsMonkey</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Our Commitment to Keeping You Informed
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            At NewsMonkey, we are dedicated to keeping you informed about the latest news and events from around the world. We strive to provide accurate, unbiased, and comprehensive coverage of current affairs, ensuring that you stay up to date with what's happening locally, nationally, and globally.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Reliable and Comprehensive News Coverage
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Our team of experienced journalists and editors work tirelessly to gather and deliver news stories that matter. We believe in the power of journalism to shape public opinion, promote transparency, and foster informed conversations. Whether it's breaking news, politics, business, technology, entertainment, sports, or any other topic, we aim to provide a diverse range of perspectives to give you a well-rounded understanding of the issues at hand.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            The Power of Journalism in Shaping Opinion
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            At NewsMonkey, we value integrity, professionalism, and the highest journalistic standards. We are committed to presenting news in a fair and balanced manner, adhering to ethical guidelines and fact-checking processes to ensure the accuracy and reliability of our content. Our goal is to empower you with knowledge and enable you to make informed decisions in an ever-changing world.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Diverse Perspectives for a Well-Rounded Understanding
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            In addition to delivering news, we also strive to engage and connect with our readers. We encourage active participation through comments, feedback, and sharing of our articles on social media platforms. We believe in the power of dialogue and believe that everyone's voice deserves to be heard.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Thank You for Choosing NewsMonkey
            </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Thank you for visiting NewsMonkey. We hope that you find our website informative, engaging, and a valuable resource for staying informed. Together, let's explore the world of news and discover the stories that shape our lives.
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}
