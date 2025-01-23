import Sidebar from "../komponen/sidebar";
import Isikamar from "./isikamar";
import Header from "../komponen/header";
import "../style/dashboardkamar.css";

const kamar = () => {
  return (
    <div className="Dasboard-Kamar">
      <Header />
      <div className="content-container">
        <Sidebar />
        <main className="main-content">
          <Isikamar />
        </main>
      </div>
    </div>
  );
};
export default kamar;
