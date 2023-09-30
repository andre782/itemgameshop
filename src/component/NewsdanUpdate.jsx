import React from 'react'
import Card from 'react-bootstrap/Card';
import news1 from "../image/News/news1.jpg"
import news2 from "../image/News/news2.jpg"
import "../App.css"

const NewsdanUpdate = () => {
  return (
    <>
    <div className=' container-xxl p-4' style={{ gap: '10px', marginTop: '50px', marginBottom: '50px' }}>
      <h1 style={{color: 'white', marginBottom: '10px'}}>NEWS AND UPDATES</h1>
      <div className="newsx">
            <Card className='news'>
        <Card.Img variant="top" src={news1}  className='gmbr'/>
        <Card.Body>
          <Card.Title>CEK INFO</Card.Title>
          <Card.Text>
            Promo dan berita update lainnya
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='news'>
        <Card.Img variant="top" src={news2} className='gmbr'/>
        <Card.Body>
          <Card.Title>Waspada Penipuan APK!</Card.Title>
          <Card.Text>
            pengumuman penting codashop
          </Card.Text>
        </Card.Body>
        
      </Card>
      </div>
    </div>
    </>
  )
}

export default NewsdanUpdate