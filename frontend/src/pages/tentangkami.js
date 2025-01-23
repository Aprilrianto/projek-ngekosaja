import NavbarComponent from "../komponen/navbar";
import Tentang from './introtentang';
import Isitentang from './isitentang';
import Memilih from './memilih';
import Footer from "../komponen/footer";
const tentangkami = () => {
    return(
        <div className="tentang">
            <NavbarComponent/>
            <Tentang/>
            <Isitentang/>
            <Memilih/>
            <Footer/>
        </div>
    )
}
export default tentangkami;