import NavbarComponent from "../komponen/navbar";
import Halpemilik from "./halpemilik";
import Fitur from "./fitur";
import Keuntungan from "./keuntungan";
import Mulaimaks from "./mulaimaks";
import Footer from "../komponen/footer";
const pemilikkos = () => {
    return(
        <div className="Pemilik">
          <NavbarComponent/>
          <Halpemilik/>
          <Fitur/>
          <Keuntungan/>
          <Mulaimaks/>
          <Footer/>
        </div>
    )
}
export default pemilikkos;