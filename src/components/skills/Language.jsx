import React from 'react'

const Languange = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Language</h3>
        
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>Indonesian</h3>
                        <span className='skills__level'>Native</span>
                    </div>
                </div>
                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>English</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

              
            </div>
        </div>
    </div>
    
  )
}

export default Languange