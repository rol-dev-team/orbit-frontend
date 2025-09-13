
import { videosData } from '../../static/data'
import { HeadingTitle } from '../common/HeadingTitle'
import { VideoBox } from '../VideoBox'

function WhatsInTheirMind({title,subtitle}) {
  return (
    <section className='whats-in-their-mind-section'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <HeadingTitle
                text={`${title}`}
                style={{ marginBottom: "15px" }}
              />
              <HeadingTitle
                text={`${subtitle}`}
                style={{
                  marginBottom: "15px",
                  color: "var( --active-border-color)",
                  fontFamily: "'Pristina', sans-serif",
                  fontWeight: "normal",
                }}
              />
            </div>
          </div>
          <VideoBox data={videosData} />
        </div>
      </section>
  )
}

export default WhatsInTheirMind