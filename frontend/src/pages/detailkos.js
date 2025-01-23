import NavbarComponent from "../komponen/navbar";
import KosDetail from "./KosDetail";
import Infokos from "./infokos";
import Ulasan from "./ulasan";
import Footer from "../komponen/footer";
const detailkos = () => {
    return (
        <div className="DETAIL KOS">
            <NavbarComponent/>
            <div className="kos-container">
                <KosDetail />
                <Infokos />
                <Ulasan/>
                <Footer/>
            </div>
        </div>
    );
};

export default detailkos;
