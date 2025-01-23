import '../style/mulaimaks.css';
import { Link } from 'react-router-dom';
const mulaimaks = () => {
    
    return(
        
            <div className="mulaimaksbg">
                <div className="mulaimaks-content">
                    <h1>Mulai Maksimalkan Kos Anda Sekarang!</h1>
                    <p>Jangan lewatkan kesempatan untuk menjangkau lebih banyak penyewa dan meningkatkan pendapatan. Daftarkan kost Anda sekarang dan nikmati semua fiturnya!</p>
                    <Link to="/dashboard_overview">
                        <button className="mulai-button">DAFTAR SEKARANG</button>
                    </Link>
                </div>
            </div>
        );
}
export default mulaimaks;