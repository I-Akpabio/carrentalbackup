import React from 'react'

import { Image, Icon, Card, Button } from 'semantic-ui-react'

const baseImgUrl = 'http://localhost/carrental/admin/img/vehicleimages/'

const SimilarCars = ({ cars, changePage }) => {
  let CarList = cars.map((car, i) => (
    <Card key={i}>
      <Image src={baseImgUrl + car.Vimage1} />
      <Card.Content>
        <Card.Header > 
          <Button onClick={() => changePage("book-car/"+car.id)}> {`${car.BrandName}, ${car.VehiclesTitle}`}
          </Button>
        </Card.Header>
        <Card.Description>
          <h3>$ {car.PricePerDay}</h3>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="/book-car">
          {' '}
          <Icon name="calendar" /> {car.ModelYear} Model
        </a>
        <a href="/book-car">
          {' '}
          <Icon name="user" /> {car.SeatingCapacity} Seats
        </a>
        <a href="/book-car">
          {' '}
          <Icon name="car" /> {car.FuelType}
        </a>
      </Card.Content>
    </Card>
  ))

  return (
    <div style={{ paddingTop: '30px' }}>
      <h1>Similar Cars</h1>
      <br />

      <Card.Group>
        { CarList }
      </Card.Group>
    </div>
  )
}

export default SimilarCars
