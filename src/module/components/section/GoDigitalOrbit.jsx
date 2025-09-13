
import { goDigitalWithOrbitData } from '../../static/data'
import { DeviceCard } from '../common/DeviceCard'
import { HeadingTitle } from '../common/HeadingTitle'
import { SubTitle } from '../common/SubTitle'

function GoDigitalOrbit() {
  return (
    <section className='go-digital-orbit-section'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <HeadingTitle
                text='Go Digital With Orbit'
                style={{ marginBottom: "15px" }}
              />
              <SubTitle
                text='We offer a number of Hardware Facilities'
                style={{ marginBottom: "40px" }}
              />
            </div>
          </div>
          <DeviceCard data={goDigitalWithOrbitData} />
        </div>
      </section>
  )
}

export default GoDigitalOrbit