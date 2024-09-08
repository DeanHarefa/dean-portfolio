import React, { useState } from 'react'
import "./info.css"
import InternLetter from "../../assets/Internship Certificate.png"
const Info = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="about__info grid" >
            <div className="about__box" onClick={() => toggleTab(1)}>
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle"> &gt; 1 Year Working</span>
            </div>

            <div className={toggleState === 1 ? "about__modal active-modal" : "about__modal"}>
                <div className="about__modal-content">
                    <i onClick={() => toggleTab(0)} className='uil uil-times about__modal-close'></i>
                    <h3 className='about__modal-title'>Experience</h3>


                    <ul className='about__modal-services grid'>
                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>Certificate of Professional Competence at Ciputra Group</p>
                            <a download="" href={InternLetter} >
                                <i className='uil uil-download-alt about__modal-icon'></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            {/* <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48 + Projects</span>
             </div> */}

            <div className="about__box" onClick={() => toggleTab(2)}>
                <i class="bx bx-certification about__icon"></i>
                <h3 className="about__title">Certification</h3>
                <span className="about__subtitle">6 certification</span>
            </div>

              <div className={toggleState === 2 ? "about__modal active-modal" : "about__modal"}>
                <div className="about__modal-content">
                    <i onClick={() => toggleTab(0)} className='uil uil-times about__modal-close'></i>
                    <h3 className='about__modal-title'>Certification</h3>


                    <ul className='about__modal-services grid'>
                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>Quality Assurance Engineer</p>
                            <a download="" href="https://coding.id/sertifikat/7B9LVZJM" target="_blank" rel="noopener noreferrer">
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>TOEFL PREPARATION BOOTCAMP</p>
                            <a download="" href="https://drive.google.com/file/d/1kNNZP9hmNYoyadCkWxu47F6Fio8GnHbf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>SOFTWARE QUALITY ASSURANCE FOR MOBILE APP</p>
                            <a download="" href="https://drive.google.com/file/d/1H0-6o36KD8Pi9ljlJY0w6Ue4p0tUdmtL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>DATA ANALYSIS: FULLSTACK INTENSIVE BOOTCAMP</p>
                            <a download="" href="https://drive.google.com/file/d/1CVtvA4IGk5A9y7eEtZQakEDXBCNYaZYZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>Intro to Data Analytics</p>
                            <a download="" href="https://drive.google.com/file/d/1Sh0cI6-IGdmS9ssvNrhx2gDH8o3e_rb3/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                        <li className='about__modal-service border__effect'>
                            <p className='about__modal-info'>UML using Visual Paradigm</p>
                            <a download="" href="https://drive.google.com/file/d/1BS0IF5iomJ3kLbMm-6EvI0nQFF0aOCYL/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                                <i className='uil uil-eye about__modal-icon'></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
         

        </div>
    )
}

export default Info