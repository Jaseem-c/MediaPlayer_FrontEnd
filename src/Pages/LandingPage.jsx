import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <>
      {/* section1 */}
      <Row className='w-100 mt-5  d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quia eius consequuntur nobis praesentium suscipit. Praesentium aliquam officia officiis! Neque veniam saepe amet quae magnam reprehenderit nisi. Dolores omnis explicabo minus! Sapiente distinctio exercitationem adipisci. Earum sunt repellat necessitatibus ipsa!</p>
         <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center p-5 '>
          <img src="https://i.gifer.com/embedded/download/7h5u.gif" alt="no image" className='w-75' />
        </Col>
      </Row>
      {/* sedction2 */}
      <div className='container mt-3'>
        <h3 className='text-center'>Features</h3>

        <Row className='mt-5 p-2'>
          <Col md={1} ></Col>
          <Col md={3} >
            <Card style={{ width: '100%' }} className='mt-3'>
              <div className='p-3'><Card.Img variant="top" style={{width:'100%',height:"280px"}} src="https://i.pinimg.com/originals/06/cf/d1/06cfd1ac82dfcbcb433fc6e10a86896f.gif"  wi/></div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the Card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='px-md-5' >
            <Card style={{ width: '100%' }} className='mt-3'>
             <div className='p-3'> <Card.Img variant="top" style={{width:'100%',height:"280px"}} src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" /></div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content the content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} >
            <Card style={{ width: '100%' }} className='mt-3'>
              <div className='p-3'><Card.Img variant="top" style={{width:'100%',height:"280px"}} src="https://i.pinimg.com/originals/1d/91/f8/1d91f8f64a3d7e4e51cfe526012cfa3f.gif" /></div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} ></Col>
        </Row>

        <div className='d-flex justify-content-center align-items-center mt-5 '>



        </div>
      </div>
      {/* section3 */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 rounded my-4 border-2" >
            <div className="row p-3">
              <div className="col-md-6">
                <h3 className='text-warning'>Simple Fast And Powerful</h3>
                <p className='mt-4'><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nesciunt blanditiis iure ipsa ducimus tenetur met consectetur adipisicing elit.</p>
                <p><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nesciunt blanditiis iure ipsa ducimus tenetur met consectetur adipisicing elit.</p>
                <p><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nesciunt blanditiis iure ipsa ducimus tenetur met consectetur adipisicing elit.</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=C5QVxzdjFsoAb5fa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>

          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}

export default LandingPage