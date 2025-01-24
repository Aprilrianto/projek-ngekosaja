import NavbarComponent from "../komponen/navbar";
import Intro from "../komponen/intro";
import Pilihan from "./pilihan";
import Rekomendasi from "./rekomendasi";
import Sekitarkampus from "./sekitarkampus";
import UserKeluhan from "./userkeluhan";
import Footer from "../komponen/footer";



const beranda = () => {
    return(
        <div>
            <NavbarComponent/>
            <Intro/>
            <Pilihan/>
            <Rekomendasi/>
            <Sekitarkampus/>
            <UserKeluhan/>
            <Footer/>

        </div>
    )
}
export default beranda;