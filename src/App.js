import Image from 'react-bootstrap/Image'
import { Navbar, Container, Col, Row } from 'react-bootstrap'
import { useState } from "react"

const App = () => {
  const [myChoice, setMyChoice] = useState('')
  const [score, setScore] = useState(0)

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="rockk.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="paper.png" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="scissors.png" thumbnail />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
