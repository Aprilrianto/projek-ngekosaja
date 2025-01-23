import '../style/infokos.css'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';  

const Infokos = () => {
    const navigate = useNavigate();  

    const handleTanyaPemilikClick = () => {
        navigate('/tanya-pemilik');  
    };

    const handleSewaSekarangClick = () => {
        navigate('/paymentkos');  
    };

    return (
        <div className="infokos">
            <div className="header">
                <div className="profile-and-details">
                    <h3>Pemilik kos</h3>
                    <div className="profile">
                        <div className="profile-icon"></div>
                        <div className="account-name">Putra Mahen</div>
                    </div>
                    <div className="account-details text-left">
                        <h3>Spesifikasi & Fasilitas Kamar</h3>
                        <p><IoMdCheckmarkCircleOutline className="icon" /> 2,5 x 3 Meter</p>
                        <p><IoMdCheckmarkCircleOutline className="icon" /> Kasur (Single)</p>
                        <p><IoMdCheckmarkCircleOutline className="icon" /> Lemari Pakaian</p>
                        <p><IoMdCheckmarkCircleOutline className="icon" /> AC</p>
                        <p><IoMdCheckmarkCircleOutline className="icon" /> Kamar Mandi Dalam</p>
                    </div>
                    
                </div>

                <div className="pricing-section">
                    <div className="price-container">
                        <div className="discount-badge">-12%</div>
                        <div className="price-details">
                            <p className="original-price"><s>Rp 454.000</s></p>
                            <p className="current-price">Rp 400.000<span className="per-month">/Bulan</span></p>
                        </div>
                    </div>

                    <div className="options">
                        <div className="option">
                            <label>Check-in</label>
                            <p>27 Sep 2024</p>
                        </div>
                        <div className="option">
                            <label>Durasi Sewa</label>
                            <select>
                                <option>Bulanan</option>
                                <option>Mingguan</option>
                                <option>Harian</option>
                            </select>
                        </div>
                    </div>

                    <div className="actions">
                        <button className="contact-owner" onClick={handleTanyaPemilikClick}>
                            Tanya Pemilik Kos
                        </button>
                        <button className="book-now" onClick={handleSewaSekarangClick}>
                            Sewa Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infokos;
