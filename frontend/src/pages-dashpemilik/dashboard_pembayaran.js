import Header from "../komponen/header";
import Sidebar from "../komponen/sidebar";
import HasilPesanan from "./HasilPesanan.js";
import "../style/dashboardpembayaran.css"
const dashboard_pembayaran = () => {
    return (
        <div className="Dasboard-Pembayaran">
        <Header />
        <div className="content-container">
          <Sidebar />
          <main className="main-content">
            <HasilPesanan />
          </main>
        </div>
      </div>
    )
}
export default dashboard_pembayaran;