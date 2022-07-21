import React from 'react'
import Card from 'react-bootstrap/Card'


const Cards = ({ data }) => {

  return (
    <>
      {
        data.map((element, k) => {
          return (
            <>
              <Card style={{ width: '22rem',border:"none" }} className="mb-4">
                <Card.Img variant="top" src={element.imgdata}/>

                <div className='card_body'>
                  <div className='upper_data d-flex justify-content-between align-items-center'>
                    <h4 className='mt-2'>{element.rname}</h4>
                    <span>{element.rating}&nbsp;★</span>
                  </div>

                  <div className='lower_data d-flex justift-content-between'>
                    <h5>{element.address}</h5>
                    <span>{element.price}</span>
                  </div>


                  <div className='extra'></div>
                </div>

              </Card>
            </>
          )
        })
      }

    </>
  )
}

export default Cards
