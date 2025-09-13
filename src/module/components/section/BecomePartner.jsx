
import { Button } from '../common/Button'
import { HeadingTitle } from '../common/HeadingTitle'
import { SubTitle } from '../common/SubTitle'

function BecomePartner() {
  return (
    <section className='become-partner-section'>
        <div className='container'>
          <div className='box'>
            <div className='row'>
              <div className='col-12'>
                <div className='content' style={{paddingLeft: '7rem'}}>
                  <HeadingTitle
                    text='Become'
                    style={{
                      marginBottom: "0px",
                      textAlign: "start",
                    }}
                  />
                  <HeadingTitle
                    text='Our Partner'
                    style={{
                      marginBottom: "0px",
                      textAlign: "start",
                    }}
                  />
                  <SubTitle
                    text='Expand your business with orbit internet'
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      textAlign: "start",
                    }}
                  />
                  <Button
                    type='button'
                    text='Learn More'
                    background='var(--color-primary)'
                    color='white'
                    padding='5px 45px'
                    borderRadius='5px'
                    className=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BecomePartner