import React, { useState } from 'react'
const WorksItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      {/* <a href="#" className="work__button">
          View Detail <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a> */}

      <span className='services__button' onClick={toggleModal}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>
      {isModalOpen && <WorkModal item={item} onClose={toggleModal} />}

    </div>
  )
}

export default WorksItems

const WorkModal = ({ item, onClose }) => {
  return (
    <div className="services__modal active-modal">
      <div className="services__modal-content">
        <i onClick={onClose} className='uil uil-times services__modal-close'></i>
        <h3 className='services__modal-title'>{item.title}</h3>
        <p className="services__modal-description">
          {item.description} {/* You will need to add 'description' to your item object */}
        </p>

        {/* <ul className='services__modal-services grid'> */}
          {/* Now dynamically generate list items from the item object */}
          {item.services?.map((service, index) => ( // Assuming 'services' is an array in your item object
            <li key={index} className='services__modal-service'>
             
              <p className='services__modal-info'>{service}</p>
            </li>
          ))}
        {/* </ul> */}

        <p className='services__modal-info'>Tools: {item.tools}</p>

        {item.programming ? <p className='services__modal-info'>Programming Language: {item.programming}</p>: null}
        
        {item.view ?<a href={item.view} className="work__button">
          View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a> : null}
        
        {item.download ? <a href={item.download} className="work__button2">
          Download Project <i className="bx bx-right-arrow-alt work__button-icon2"></i>
        </a> : null}
        
      </div>
    </div>
  );
};