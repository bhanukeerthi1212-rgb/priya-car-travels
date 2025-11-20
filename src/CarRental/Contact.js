
import React from 'react'
import SendEnquiry from './Admin/SendEnquiry'

const Contact = () => {
  return (
    <div className='container p-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <SendEnquiry/>
          </div>
        </div>
        <div className='col-lg-6'></div>
    </div>
  )
}

export default Contact