import React from 'react'
import Card from 'react-bootstrap/Card'


const Cards = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />

        <div className='card_body'>
          <div className='upper_data d-flex justify-content-between align-items-center'>
            <h4 className='mt-2'>Mduduzi</h4>
            <span>3.8&nbsp;★</span>
          </div>

          <div className='lower_data d-flex justift-content-between'>
            <h5>.........</h5>
            <span> 250 for one</span>
          </div>


          <div className='extra'></div>
        </div>

      </Card>
    </>
  )
}

export default Cards
