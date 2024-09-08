import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personel Journey</span>
    
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                    {toggleState === 1 && <span className="qualification__hr"></span>}
                </div>


                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                    {toggleState === 2 && <span className="qualification__hr"></span>}
                </div>
            </div>

            
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>
                
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">Bina Nusantara University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Senior High School</h3>
                            <span className="qualification__subtitle">SMAN 4 KABUPATEN TANGERANG </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2019
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Junior High School</h3>
                            <span className="qualification__subtitle">SMP CITRA ISLAMI</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2016
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Elementary School</h3>
                            <span className="qualification__subtitle">SD CITRA ISLAMI</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2007 -2013
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                    <div>
                            <h3 className="qualification__title">QA Manual Tester</h3>
                            <span className="qualification__subtitle">PT Bank Mandiri Tbk </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Now
                            </div>
                        </div>
                        

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>

                       

                        <div>
                            <h3 className="qualification__title">Front End Developer</h3>
                            <span className="qualification__subtitle">Ciputra Group</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>
                    </div>
                    

                    

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification