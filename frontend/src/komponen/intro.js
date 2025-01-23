import '../style/intro.css'
const intro = () => {
    return(
        <div className='foto'>
            <main className="teks">
                <h1>Bingung dan Kesulitan cari kos?</h1>
                <h1>Cari di NgekosAja!</h1>
                <p>NgekosAja memudahkan pencarian kost Anda! Temukan pilihan kost sesuai kebutuhan dan budget, dari lokasi strategis hingga fasilitas lengkap. Cari kos terbaik hanya di NgekosAja!</p>
                
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="location">Pilih Lokasi:</label>
                        <select id="location">
                            <option value="">Pilih lokasi</option>
                            <option value="location1">JAWA</option>
                            <option value="location2">PAPUA</option>
                            <option value="location3">JAWA TIMUR</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkin">Tanggal Check-In:</label>
                        <input type="date" id="checkin" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Durasi Sewa (hari):</label>
                        <input type="number" id="duration" min="1" />
                    </div>
                    <div className="form-group filter-group">
                        <label htmlFor="filter">Filter:</label>
                        <input type="text" id="filter" placeholder="Masukkan filter" />   
                    </div>
                    <div className="form-group">
                        <button type="button">Search</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default intro;