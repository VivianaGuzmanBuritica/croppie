import React, { useState, useEffect } from 'react';
import './style.css'

const Colombia = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
    }, 500000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 2));
  };


  return (
    <div className='card_container_col'>
    <div>
      {isModalVisible && (
        <div className='modal'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
             X
            </button>
            <section className='modal-section'>
             
                <div className="slider-container">
                 
                  <div className={`slider-slide ${currentSlide === 1 ? 'active' : ''}`}> 
                  <div className='text-slide1_col'>
                    <h3> Colombia: Caficultores departamento el Cauca</h3>
                 
                    <p>Las caficultoras hacen parte de la Asociación de Mujeres Caficultoras del Cauca, AMUCC, una organización de base, sin ánimo de lucro, con enfoque de género, que está integrada por 487 mujeres productoras de café.</p>
                  </div>
                  <div   className='text-slide1_col'>
                  <p>En Croppie participan 323 caficultoras de esta organización de los municipios de Cajibio, Corinto, Morales, Piendamó, Popayán, El Tambo y Timbío. Las caficultoras se encuentran en su mayoría en un rango etario entre los 46 y 55 años de edad, con un nivel de educación en su mayoría de primaria incompleta.</p>
                  </div>
                  </div>
                  <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
                  <div className='text-slide1_col'>
                  <h3>Colombia: Caficultores departamento el Quindío</h3>
                    <p>En Croppie participan 250 caficultores, todos ubicados geográficamente, en el municipio de Génova, un municipio caficultor cuya actividad cafetera se concentra entre los 1700 a 1850 msnm, siendo el primer municipio caficultor en el departamento de Quindío. De los 250 productores, 184 son mujeres y 66 son hombres, principalmente las mujeres caficultoras hacen parte de la Asociación Aromas del Campo, hoy con marca propia registrada como Asociación de Chapoleras del municipio de Génova en el departamento de Quindío.
                   </p>
                  </div>
                  <div   className='text-slide1_col'>
                  <p>Los caficultores en su mayoría se encuentran en un rango etario entre los 46 y 55 años de edad, con un nivel de educación en su mayoría de primaria completa.</p>
                  </div>
                  </div>
                  <button className="slider-button-left" onClick={prevSlide}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right" onClick={nextSlide}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
        </div>
      )}
    </div>
            
            
    <button onClick={openModal}> Colombia</button>   
    
  </div>
  )
}

export default Colombia