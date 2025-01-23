import NavbarComponent from "../komponen/navbar";
import Intro from "../komponen/intro";
import Pilihan from "./pilihan";
import Rekomendasi from "./rekomendasi";
import Sekitarkampus from "./sekitarkampus";
import Footer from "../komponen/footer";



const beranda = () => {
    return(
        <div>
            <NavbarComponent/>
            <Intro/>
            <Pilihan/>
            <Rekomendasi/>
            <Sekitarkampus/>
            <Footer/>

        </div>
    )
}
export default beranda;