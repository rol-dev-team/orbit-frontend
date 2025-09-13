
import sslcommerce from "../../../assets/images/footer/ssl-commerz.png";

function PaymentGateway() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12'>
            <div className='payment-gateway'>
              <h6>We accept all payment gateways</h6>
              <img src={sslcommerce} alt='paymentgateway' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default PaymentGateway