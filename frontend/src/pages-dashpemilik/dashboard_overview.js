import Header from "../komponen/header";
import Sidebar from "../komponen/sidebar";
import "../style/dashboardoverview.css";
import Tabeloverview from "./tabelover";
import Dashboard_pembayaran from "./dashboard_pembayaran";

const dashboard_overview = () => {
  return (
    <div className="Dasboard-Overview">
      <Header />
      <div className="content-container">
        <Sidebar />
        <main className="main-content">
          <Tabeloverview />
        </main>
      </div>
    </div>
  );
};
export default dashboard_overview;
