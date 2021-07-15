import Image from 'react-bootstrap/Image'
import { Navbar, Container, Col, Row, Button } from 'react-bootstrap'
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import testUtils from 'react-dom/test-utils'

const App = () => {
  const [myChoice, setMyChoice] = useState('')
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState('')

  const imageClick = (event) => {
    const name = event.target.getAttribute('data-name')
    setChoice(`You have picked ${name} as your weapon`)

  }

  return (
    <div>
      <Container>
        <h2>{choice}</h2>
        <Row>
          <Col md={4} style={{ textAlign: "center" }}>
            <Image src="rock.png" data-name="rock" onClick={imageClick} fluid />
            <p></p>
            <h2>mo2</h2>
          </Col>
          <Col md={{ span: 4, offset: 4 }} style={{ textAlign: "center" }}>
            <Image src="paper.png" data-name="paper" onClick={imageClick} fluid />
            <p>mo</p>
          </Col>
        </Row>
        <Row>
          <Container>
            <Col md={{ span: 6, offset: 3 }} style={{ textAlign: "center" }}>
              <Image src="scissors.png" data-name="scissors" onClick={imageClick} fluid />
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default App;
