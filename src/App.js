import Image from 'react-bootstrap/Image'
import { Navbar, Container, Col, Row, Button } from 'react-bootstrap'
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [myChoice, setMyChoice] = useState('')
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState('')
  const style = {
    width: '300px',
    height: '300px'
  }

  const imageClick = (event) => {
    const name = event.target.getAttribute('data-name')
    setChoice(`You have picked ${name} as your weapon`)

  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h2>{choice}</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={4} style={style}>
            <Image src="rock.png" data-name="rock" onClick={imageClick} fluid />
            <p></p>
            <h2>mo2</h2>
          </Col>
          <Col md={{ span: 4, offset: 4 }} style={style}>
            <Image src="paper.png" data-name="paper" onClick={imageClick} fluid />
            <p>mo</p>
          </Col>
        </Row>
        <Row>
          <Container>
            <Col md={{ span: 6, offset: 3 }} style={style}>
              <Image src="scissors.png" data-name="scissors" onClick={imageClick} fluid />
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default App;
