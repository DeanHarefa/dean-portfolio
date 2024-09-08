import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id='services'>
            <h2 className='section__title'>Professional Experience</h2>
            <span className='section__subtitle'>Work history</span>

            <div className="services__container container grid">
            <div className="services__content">
                    <div>
                        <i className='uil uil-bug services__icon'></i>
                        <h3 className='services__title'>Quality Assurance <br /> Manual Tester</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Quality Assurance & Testing</h3>
                            <p className="services__modal-description">
                                Bank Mandiri Tbk (JUN 2024 - Now)
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Conducted Website Testing 
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Created Defect Documentation Using JIRA
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Developed Test Cases
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Performed API Testing Using Postman 
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Monitoring api logs or data using kibana/elastic 
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                     Checked Host Using AS400
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    Tested Applications on Branch Delivery System (BDS)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>Front End <br /> Developer & QA</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(2)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Create and Quality Control Website</h3>
                            <p className="services__modal-description">
                                Ciputra Group (FEB 2023 - FEB 2024)
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Develope Features For Planner Website Using Next JS
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Fixing Bug In Planner Website
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Checking Planner Website for bug
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Creating Design Interface Using Figma
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Create Test Case Using Tuskr and Microsft Excel
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Project <br /> Leader</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(3)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Monitoring Project Website</h3>
                            <p className="services__modal-description">
                                Ciputra Group (AUG 2023 - SEPT 2023)
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Monitoring progress of FIABCI Website
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Conducting Website Inspections
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Presenting Progress With Site Supervisor
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Creating Page Using Wordpress
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Reporting Bug Or Improvement To The Vendor
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Manual Testing Website

                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    )
}

export default Services