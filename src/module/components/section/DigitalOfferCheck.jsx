import comic from "../../../assets/images/sections/digital_offer_check/comic.png";
import { Button } from '../common/Button'
import { HeadingTitle } from '../common/HeadingTitle'
import { SubTitle } from '../common/SubTitle'

function DigitalOfferCheck() {
  return (
    <section className='digital-offer-check-section'>
        <div className='container'>
          <div className='box'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div style={{paddingLeft: '60px'}}>
                <HeadingTitle
                  text='Yet to enter '
                  style={{ marginBottom: "0px", textAlign: "start" }}
                />
                <HeadingTitle
                  text='a new era '
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                    marginTop: "0px",
                  }}
                />
                <HeadingTitle
                  text='  of Digital Life?'
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                    marginTop: "0px",
                  }}
                />

                <SubTitle
                  text='Exciting offers are waiting, specialized for you.'
                  style={{
                    color: "var(--color-text-sub-title)",
                    marginBottom: "20px",
                    textAlign: "start",
                    marginTop: "20px",
                  }}
                />
                <Button
                  type='button'
                  text='Check Offers'
                  background='var(--color-primary)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                  className=''
                />
                </div>
              </div>
              <div className='col-md-6' style={{paddingLeft: '100px'}}>
                <img
                  src={comic}
                  className='img-fluid'
                  alt='comic image'
                  height='auto'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DigitalOfferCheck