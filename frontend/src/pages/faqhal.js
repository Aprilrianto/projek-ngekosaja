import { Container } from "react-bootstrap";
import '../style/faq.css';
const faqhal = () => {
    return (
        <Container className="faq-hal">
            <div className="text-1">
                <h1>Pertanyaan Umum Pemilik Kos</h1>
                <h2>1. Bagaimana cara mendaftarkan kos saya di NgekosAja?</h2>
                <h3>Anda bisa mendaftarkan kos Anda dengan membuat akun pemilik kos. Setelah itu, unggah detail kos, seperti alamat, fasilitas, dan harga sewa. Kos Anda akan segera muncul di platform kami.</h3>
            </div>
            <div className="text-1">
                <h2>2. Apakah ada biaya  memasang kos di NgekosAja?</h2>
                <h3>Saat ini, NgekosAja menawarkan layanan gratis untuk pemilik kos. Namun, kami juga menyediakan opsi promosi berbayar untuk meningkatkan visibilitas kos Anda.</h3>
            </div>
            <div className="text-1">
                <h2>3. Bagaimana cara menarik lebih banyak penyewa??</h2>
                <h3>Anda bisa mendaftarkan kos Anda dengan membuat akun pemilik kos. Setelah itu, unggah detail kos, seperti alamat, fasilitas, dan harga sewa. Kos Anda akan segera muncul di platform kami.</h3>
            </div>
            <div className="text-1">
                <h2>4. Bagaimana cara mengelola kos saya melalui NgekosAja?</h2>
                <h3>Setelah mendaftar, Anda dapat masuk ke akun pemilik kos dan mengelola data kos, mengubah harga sewa, dan memantau permintaan penyewa dari satu dashboard yang mudah digunakan.</h3>
            </div>
            <div className="text-1">
                <h2>5. Apa yang harus saya lakukan jika ada masalah dengan penyewa?</h2>
                <h3>NgekosAja menyediakan fitur dukungan pelanggan untuk membantu Anda menyelesaikan masalah terkait penyewa. Hubungi kami melalui layanan dukungan yang tersedia di platform.</h3>
            </div>
            {/* teks 2 */}
            <div className="text-2">
                <h1>Pertanyaan Umum Pencari Kos</h1>
                <h2>1. Bagaimana cara mencari kos di NgekosAja?</h2>
                <h3>Cukup masukkan lokasi atau nama kota di kolom pencarian, lalu filter hasilnya berdasarkan harga, fasilitas, atau preferensi lain untuk menemukan kos yang sesuai dengan kebutuhan Anda.</h3>
            </div>
            <div className="text-2">
                <h2>2. Apakah saya perlu membuat akun untuk mencari kos?</h2>
                <h3>Tidak perlu. Anda dapat mencari kos tanpa akun. Namun, untuk memesan kos atau menyimpan favorit, Anda perlu membuat akun..</h3>
            </div>
            <div className="text-2">
                <h2>3. Bagaimana cara memesan kos di NgekosAja?</h2>
                <h3>Setelah menemukan kos yang sesuai, klik "Pesan" dan ikuti instruksi untuk menghubungi pemilik kos. Anda bisa berkomunikasi langsung dengan pemilik melalui fitur pesan.</h3>
            </div>
            <div className="text-2">
                <h2>4. Apakah ada biaya tambahan saat memesan kos melalui NgekosAja?</h2>
                <h3>Tidak, NgekosAja tidak mengenakan biaya tambahan untuk pencari kos. Semua biaya yang tertera adalah biaya sewa yang langsung ditentukan oleh pemilik kos.</h3>
            </div>
            <div className="text-3">
                <h2>5. Bagaimana jika saya memiliki pertanyaan tentang kos yang ingin saya pesan?</h2>
                <h3>Anda dapat menggunakan fitur pesan untuk langsung menghubungi pemilik kos dan menanyakan detail lebih lanjut tentang kos tersebut.</h3>
            </div>
        </Container>
    );
}

export default faqhal;