import '../style/footer.css';
import logo from '../aset/logo-ngekos.png';

const footer = () => {
    return (
        <div className="footer-container">
        <div className="footer-left">
            <img
                src={logo}
                alt="Logo"
                className="footer-logo"
            />
            <span className="footer-brand-name">NgekosAja</span>
            <p className="footer-description">
                Temukan tempat kost terbaik di sekitar Anda. Menyediakan tempat tinggal nyaman dengan harga terjangkau.
            </p>
            
        </div>
        <div className="footer-nav">
            <h3 className="footer-nav-title">Navigasi</h3>
            <a href="/beranda" className="footer-nav-link">Beranda</a>
            <a href="/pemilikkos" className="footer-nav-link">Pemilik Kos</a>
            <a href="/faq" className="footer-nav-link">FAQ</a>
            <a href="/tentangkami" className="footer-nav-link">Tentang Kami</a>
        </div>
        <div className="footer-contact">
            <h3 className="footer-contact-title">Kontak</h3>
            <a href="mailto:info@ngekosaja.com" className="footer-contact-link">info@ngekosaja.com</a>
            <a href="tel:+1234567890" className="footer-contact-link">+123 456 7890</a>
        </div>
        <div className="footer-follow-us">
            <h3 className="footer-follow-title">Ikuti Kami</h3>
            <div className="footer-social-icons">
                {/* <a href="https://facebook.com" className="footer-social-icon">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a> */}
                {/* <a href="https://twitter.com" className="footer-social-icon">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a> */}
                {/* <a href="https://instagram.com" className="footer-social-icon">
                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a> */}
            </div>
        </div>
    </div>
    );
};

export default footer;
