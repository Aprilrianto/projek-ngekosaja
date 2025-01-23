import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/kosdetail.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';


const kosData = [
    { id: 1, image: 'kos 1.jpg', title: "Kos Putri Harmoni Asri", type: "Putri", location: "Cemara Indah, Mutiara", rating: 4.5 },
    { id: 2, image: 'kos 2.jpg', title: "Kos April", type: "Putra", location: "Jl. Melati No.12", rating: 4.0 },
    { id: 3, image: 'kos 3.jpg', title: "Kos Putri Rahayu", type: "Putri", location: "Jl. Rahayu No.15", rating: 4.2 }
];

const KosDetail = () => {
    const { id } = useParams();
    const [kos, setKos] = useState(null);

    useEffect(() => {
        const kosDetails = kosData.find((kos) => kos.id === parseInt(id));
        setKos(kosDetails);
    }, [id]);

    if (!kos) return <div>Loading...</div>;

    return (
        <div className="box">
            <div className="image-group">
                <div className="group">
                    <img
                        className="img img-left"
                        alt={kos.title}
                        src={require(`../aset/${kos.image}`)}
                    />
                    <div className="right-column">
                        <img
                            className="img img-top-right"
                            alt="Detail Top"
                            src={require(`../aset/${kos.image}`)}
                        />
                        <img
                            className="img img-bottom-right"
                            alt="Detail Bottom"
                            src={require(`../aset/${kos.image}`)}
                        />
                    </div>
                </div>
            </div>
            <div className="details">
                <h2>{kos.title}</h2>
                
               
                <div className="info-row">
                    <button className="info-button">{kos.type}</button>
                    <div className="info-text">
                        <FaMapMarkerAlt className="icon-lok" /> {kos.location}
                    </div>
                    <div className="info-text">
                        <FaStar className="icon-rat" /> {kos.rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KosDetail;
