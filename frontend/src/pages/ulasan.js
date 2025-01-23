import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import '../style/ulasan.css'
import Mapp from '../aset/image.jpg';
const Ulasan = () => {
  const reviews = [
    {
      name: "Cantika Kirana",
      date: "11 Sept 24",
      rating: 5,
      title: "Parkiran luas",
      comment: "Lorem ipsum dolor sit amet consectetur. Nunc bibendum aliquet sed dapibus fringilla. Morbi odio habitasse nibh feugiat ridiculus. A sem sem aliquam quis tortor amet. At lorem eget augue nunc vulputate ultricies felis dictumst et."
    },
    {
      name: "Nur Ayu",
      date: "11 Sept 24",
      rating: 5,
      title: "Parkiran luas",
      comment: "Lorem ipsum dolor sit amet consectetur. Nunc bibendum aliquet sed dapibus fringilla. Morbi odio habitasse nibh feugiat ridiculus. A sem sem aliquam quis tortor amet. At lorem eget augue nunc vulputate ultricies felis dictumst et."
    }
  ];

  return (
    <div className="ulasan-container">
      {/* Left side - Specifications */}
      <div className="specs-section">
        <h3 className="sectionn-title">Spesifikasi & Fasilitas Kamar</h3>
        <div className="specs-content">
          <p className="spec-item">
            <IoMdCheckmarkCircleOutline className="icon1" />
            2,5 x 3 Meter
          </p>
          <p className="spec-item">
            <IoMdCheckmarkCircleOutline className="icon1" />
            Kasur (Single)
          </p>
          <p className="spec-item">
            <IoMdCheckmarkCircleOutline className="icon1" />
            Lemari Pakaian
          </p>
          <h3 className="section-title1">Lokasi</h3>
          <img src={Mapp} alt="Room Example" className="spec-image" />
          <h3 className="section-title2">Tempat terdekat</h3>
        </div>
      </div>

      {/* Right side - Reviews */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h3 className="section-title">Ulasan</h3>
          <button className="ulasan-button">Semua Ulasan</button>
        </div>
        
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <h4 className="reviewer-name">{review.name}</h4>
                <span className="review-date">{review.date}</span>
              </div>
              
              <div className="stars-container">
                {[...Array(review.rating)].map((_, i) => (
                  <AiFillStar key={i} className="star-icon" size={20} />
                ))}
              </div>
              
              <h5 className="review-title">{review.title}</h5>
              <p className="review-comment">{review.comment}</p>

              {index === 0 && (
                <div className="owner-response">
                  <h5>Tanggapan Pemilik Kos</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc bibendum aliquet sed dapibus fringilla. Morbi odio habitasse nibh feugiat ridiculus. A sem sem aliquam quis tortor amet
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ulasan;