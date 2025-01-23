import '../style/isitentang.css'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../aset/isi.jpg'; 
import image2 from '../aset/isi 2.jpg'; 
const isitentang = () => {
    return (
        <Container>
        
        <Row className="isi align-items-center">
            
            <Col md={6}>
                <h1>Visi Kami</h1>
                <p>Menjadi platform pencarian kos terdepan di Indonesia yang memberikan kemudahan, kenyamanan, dan keamanan dalam menemukan hunian sementara, serta meningkatkan kualitas hidup penghuni kos.</p>
            </Col>

            
            <Col md={6}>
                <img src={image1} alt="Deskripsi Gambar 1" className="img-fluid" />
            </Col>
        </Row>

        
        <Row className="isi align-items-center">
           
            <Col md={6}>
                <img src={image2} alt="Deskripsi Gambar 2" className="img-fluid" />
            </Col>

            
            <Col md={6}>
                <h2>Misi Kami</h2>
                <p>
                <b> 1. Mempermudah proses pencarian kos </b> dengan menyediakan filter yang lengkap, informasi transparan, dan foto berkualitas.
                </p>
                <p>
                <b> 2. Menjamin kenyamanan dan keamanan pengguna </b> dengan menyediakan platform yang aman, fitur ulasan pengguna, serta verifikasi pemilik kos.
                </p>
                <p>
                <b> 3. Memberikan pilihan kos yang beragam </b> dari berbagai lokasi, harga, dan fasilitas sesuai kebutuhan mahasiswa dan pekerja.
                </p>
            </Col>
        </Row>
    </Container>
    )
}
export default isitentang;