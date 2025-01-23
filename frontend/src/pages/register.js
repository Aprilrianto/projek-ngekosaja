// Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/register.css'; // You might want to rename this to register.css
import goggle from '../aset/7123025_logo_google_g_icon.png';
import bg from '../aset/bg3.jpg';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Validate if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Kata sandi tidak cocok!');
            return;
        }
        // Logic for registration can be added here
        console.log('Registration data:', formData);
        navigate('/');
    };

    const handleGoogleRegister = () => {
        // Logic for Google registration can be added here
        console.log('Google registration clicked');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-image">
                    <img src={bg} alt="Registration visual" />
                </div>
                <div className="login-form-container">
                    <h2>Daftar Akun</h2>
                    <p>Ayo, bergabung dan temukan kos impianmu!</p>
                    
                    <form className="login-form" onSubmit={handleRegister}>
                        <label>Nama Lengkap</label>
                        <div className="input-field">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Masukkan Nama Lengkap" 
                                required
                            />
                        </div>

                        <label>Email</label>
                        <div className="input-field">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan Email" 
                                required
                            />
                        </div>

                        <label>Nomor Handphone</label>
                        <div className="input-field">
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Masukkan Nomor Handphone" 
                                required
                            />
                        </div>
                        
                        <label>Kata Sandi</label>
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Masukkan Kata Sandi" 
                                required
                            />
                            <span 
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: 'pointer' }}
                            >
                                {showPassword ? '👁' : '👁‍🗨'}
                            </span>
                        </div>

                        <label>Konfirmasi Kata Sandi</label>
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Masukkan Ulang Kata Sandi" 
                                required
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Daftar
                        </button>

                        <button 
                            type="button" 
                            className="google-login-button"
                            onClick={handleGoogleRegister}
                        >
                            <img src={goggle} alt="Google" />
                            Daftar dengan Google
                        </button>
                    </form>

                    <p className="register-link">
                        Sudah punya akun? <Link to="/login">Masuk</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;