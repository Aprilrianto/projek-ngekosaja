import Headerpay from "../komponen/headerpay";
import Detailpayment from "./detailpayment";

const paymentkos = () => {
    return (
        <div className="Payment-header">
            <Headerpay />
        <div className="Paymentkos-container">
            <Detailpayment/>
        </div>
    </div>
        )
           
}
export default paymentkos;