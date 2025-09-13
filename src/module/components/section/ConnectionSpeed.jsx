
import { Button } from '../common/Button'
import { HeadingTitle } from '../common/HeadingTitle'
import { SubTitle } from '../common/SubTitle'

function ConnectionSpeed() {
  return (
    <section className='connection-speed'>
        <div className='container'>
          <div className='box'>
            <div className='row'>
              <div className='col-12'>
                <HeadingTitle
                  text='Check your'
                  style={{
                    color: "black",
                    textAlign: "start",
                    marginBottom: "0px",
                  }}
                />
                <HeadingTitle
                  text='Connection Speed'
                  style={{
                    color: "black",
                    textAlign: "start",
                    marginBottom: "0px",
                  }}
                />
                <HeadingTitle
                  text='in Realtime'
                  style={{
                    color: "black",
                    textAlign: "start",
                    marginBottom: "0px",
                  }}
                />
                <SubTitle
                  text='Verify your peace of mind. Powered by Ookla'
                  style={{
                    color: "var(--color-text-sub-title)",
                    marginBottom: "20px",
                    textAlign: "start",
                    marginTop: "10px",
                    
                  }}
                />
                <Button
                  type='button'
                  text='Calculate'
                  background='var(--color-primary)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                  className=''
                />
                <div className='connection-notes'>
                  <small
                    style={{
                      color: "var(--color-text-sub-title)",
                      textAlign: "start",
                      
                    }}>
                    Note: <br />
                    1. Internet speed may vary for many reasons.
                    <br />
                    2. if multiple devices using your network, the speed may be
                    lower than expected. <br />
                    3. if your internet speed is much lower than your package,
                    please contact our support.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ConnectionSpeed