import Image from 'react-bootstrap/Image'
import { Navbar, Container, Col, Row, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
    setMyChoice(`You have picked ${name} as your weapon`)
    console.log(name)
    setChoice(name)
  }

  const randWeapon = () => {
    const weapons = ["Rock", "Paper", "Scissors"]
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    if (randomWeapon === choice) {
      setMyChoice('Draw')
    }
    else if (choice === 'Rock' && randomWeapon === 'Paper') {
      setMyChoice('You Lose!')
    }
    else if (choice === 'Rock' && randomWeapon === 'Scissors') {
      setMyChoice('You Win!')
    }
    else if (choice === 'Paper' && randomWeapon === 'Rock') {
      setMyChoice('You Win!')
    }
    else if (choice === 'Paper' && randomWeapon === 'Scissors') {
      setMyChoice('You Lose!')
    }
    else if (choice === 'Scissors' && randomWeapon === 'Rock') {
      setMyChoice('You Lose!')
    }
    else if (choice === 'Scissors' && randomWeapon === 'Paper') {
      setMyChoice('You Win!')
    }
}

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h2>{myChoice}</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={4} style={style}>
            <Image src="rock.png" data-name="Rock" onClick={imageClick} fluid />
            <h2>Rock</h2>
          </Col>
          <Col md={{ span: 4, offset: 4 }} style={style}>
            <Image src="paper.png" data-name="Paper" onClick={imageClick} fluid />
            <h2>Paper</h2>
          </Col>
        </Row>
        <Row>
          <Container>
            <Col md={{ span: 6, offset: 3 }} style={style}>
              <Image src="scissors.png" data-name="Scissors" onClick={imageClick} fluid />
              <h2>Scissors</h2>
            </Col>
          </Container>
        </Row>
        <button onClick={randWeapon}>Pelaa</button>
      </Container>
    </div >
  )
}

export default App;
