import React, { useState } from 'react'
import { toolColors } from './Data';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const WorksItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>

      <span className='services__button' onClick={toggleModal}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>
      {isModalOpen && <WorkModal item={item} onClose={toggleModal} />}
    </div>
  )
}

export default WorksItems

const WorkModal = ({ item, onClose }) => {
  return (
    <div className="services__modal-work active-modal">
      <div className="services__modal-contentx">
        <div className="modal__body">
        <i onClick={onClose} className='uil uil-times services__modal-close'></i>
        <h3 className='services__modal-title'>{item.title}</h3>
        <p className="services__modal-description">
          {item.description}
        </p>

        {item.services?.map((service, index) => (
          <li key={index} className='services__modal-service'>
            <p className='services__modal-info'>{service}</p>
          </li>
        ))}

        <p className='services__modal-info'>Tools:</p>
        <Stack direction="row" spacing={1}>
          {item.tools.split(',').map((tool, index) => (
            <Chip key={index} className='Chip' label={tool.trim()} style={{ backgroundColor: toolColors[tool.trim()] || '#e0e0e0', color: '#ffffff' }} />
          ))}
        </Stack>

        {/* {item.programming && <p className='services__modal-info'>Programming Language: {item.programming}</p>} */}

        {item.programmingLogos && (
          <>
            <p className='services__modal-info2'>Programming Languages:</p>
            <Stack direction="row" spacing={2}>
              {item.programmingLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Programming logo ${index}`} style={{ width: '50px', height: '50px' }} />
              ))}
            </Stack>
          </>
        )}
        </div>

        <div className="button__container">
          {item.view && <a href={item.view} className="work__button">
            View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>}
          
          {item.download && <a href={item.download} className="work__button2">
            Download Project <i className="bx bx-right-arrow-alt work__button-icon2"></i>
          </a>}
        </div>
      </div>
    </div>
  );
};
