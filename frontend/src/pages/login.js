// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/login.css';
import bg from '../aset/bg3.jpg';
import goggle from '../aset/7123025_logo_google_g_icon.png';
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
       
        console.log('Login data:', formData);
        navigate('/');
    };

    const handleGoogleLogin = () => {
       
        console.log('Google login clicked');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-image">
                    <img src= {bg} alt="Login visual" />
                </div>
                <div className="login-form-container">
                    <h2>Selamat Datang</h2>
                    <p>Ayo, masuk dan mulai petualangan pencarian kos yang seru!</p>
                    
                    <form className="login-form" onSubmit={handleLogin}>
                        <label>Email</label>
                        <div className="email-input">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan Email" 
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

                        <div className="options">
                            <Link to="/forgot-password" className="forgot-password">
                                Lupa Kata Sandi?
                            </Link>
                        </div>

                        <button type="submit" className="login-button">
                            Masuk
                        </button>

                        <button 
                            type="button" 
                            className="google-login-button"
                            onClick={handleGoogleLogin}
                        >
                            <img src={goggle} alt="Google" />
                            Lanjutkan dengan Google
                        </button>
                    </form>


                    <p className="register-link">
                        Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;