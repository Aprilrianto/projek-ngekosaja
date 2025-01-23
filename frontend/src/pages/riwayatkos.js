import { Table, Dropdown, Button } from "react-bootstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import '../style/riwayatkos.css'
const riwayatkos = () => {
    const transactions = [
        {
          jenis: "Diterima",
          nominal: "Rp.150.000",
          metode: "Transfer Bank",
          rekening: "BCA **********987",
          tanggal: "24 Nov 2024",
          status: "Berhasil",
          aktivitas: "Menerima dari Gibran",
        },
        {
          jenis: "Pembayaran",
          nominal: "Rp.350.000",
          metode: "Transfer Bank",
          rekening: "BCA **********987",
          tanggal: "24 Nov 2024",
          status: "Berhasil",
          aktivitas: "Pembayaran Kost Bu Dwi",
        },
      ];
    
      return (
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Riwayat Transaksi</h4>
            <div className="d-flex gap-2">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Bulan Ini
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Bulan Lalu</Dropdown.Item>
                  <Dropdown.Item>Semua</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="light">
                <i className="bi bi-download"></i> Export
              </Button>
            </div>
          </div>
          <Table hover bordered>
            <thead>
              <tr>
                <th>Jenis Transaksi</th>
                <th>Nominal</th>
                <th>Metode Pembayaran</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th>Aktivitas</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx, index) => (
                <tr key={index}>
                  <td className="text-center">
                    {trx.jenis === "Diterima" ? (
                      <FaArrowDown color="green" />
                    ) : (
                      <FaArrowUp color="red" />
                    )}{" "}
                    {trx.jenis}
                  </td>
                  <td style={{ color: trx.jenis === "Diterima" ? "green" : "red" }}>
                    {trx.nominal}
                  </td>
                  <td>
                    {trx.metode}
                    <br />
                    <small>{trx.rekening}</small>
                  </td>
                  <td>{trx.tanggal}</td>
                  <td>
                    <BsCheckCircle color="green" /> {trx.status}
                  </td>
                  <td>{trx.aktivitas}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
}
export default riwayatkos;