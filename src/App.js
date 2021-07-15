import Image from 'react-bootstrap/Image'
import { Navbar, Container, Col, Row, Button } from 'react-bootstrap'
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [myChoice, setMyChoice] = useState('')
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState('')

  const imageClick = (event) => {
    const name = event.target.getAttribute('data-name')
    setChoice(`you have picked ${name} as your weapon`)
  }

  return (
    <Container>
      <h2>{choice}</h2>
      <Row>
        <Col xs={6} md={4} style={{textAlign: "center"}}>
          <Image src="rock.png" data-name="rock" onClick={(imageClick)} fluid />
          <h2>ROCKKKK</h2>
          <p>Vichous army soldier. 
            Destroys any scissor assassins on sight. 
            Gets destroyded by papre</p>
        </Col>
        <Col xs={6} md={4} style={{textAlign: "center"}}>
          <Image src="paper.png" data-name="paper" onClick={(imageClick)} fluid />
          <h2>PAPEWWR</h2>
          <p>Murderous soldier of the east.
            destroys any rocks that tries to stop it.</p>
        </Col>
        <Col xs={6} md={4} style={{textAlign: "center"}}>
          <Image src="scissors.png" data-name="scissors" onClick={(imageClick)} fluid />
          <h2>SCISSCSOFRSSA</h2>
          <p>Sneaky assassin of the night.
            Shreds any papers that ity finds.
            Gets bodied by rocks.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
