import Sidebar_admin from "../komponen/sidebar_admin";
import AdminDashboard from "./isikeluhan";
import Header_admin from "../komponen/header_admin";
// import "../style/dashboardkamar.css";

const dashboard_ulasan = () => {
  return (
    <div className="Dasboard-ulasan">
      <Header_admin />
      <div className="content-container">
        <Sidebar_admin />
        <main className="main-content">
          <AdminDashboard/>
        </main>
      </div>
    </div>
  );
};
export default dashboard_ulasan;