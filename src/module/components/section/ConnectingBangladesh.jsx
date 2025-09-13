import React from 'react'
import { ConnectCard } from '../common/ConnectCard'
import { HeadingTitle } from '../common/HeadingTitle'
import { connectingBangladeshData } from '../../static/data'
function ConnectingBangladesh() {
  return (
    <section className='connecting-bangladesh-section'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <HeadingTitle text='Connecting Bangladesh' />
                </div>
              </div>
            </div>
            <ConnectCard data={connectingBangladeshData} />
          </section>
  )
}

export default ConnectingBangladesh