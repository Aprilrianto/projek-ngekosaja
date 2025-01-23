import NavbarComponent from "../komponen/navbar";
import Faqhal from './faqhal'
import Footer from "../komponen/footer";
const faq= () => {
    return(
       <div className="faq-halaman">
      <NavbarComponent/> 
      <Faqhal/> 
      <Footer/>
      </div> 
    )
}
export default faq;