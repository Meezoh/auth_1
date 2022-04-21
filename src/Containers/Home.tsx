import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<any>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // validate the name and password

  const details = { email, password };

  const handleSignin = (e: any) => {
    e.preventDefault();

    fetch('https://admin-be.herokuapp.com/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(result => {
        const token = result.user.token;
        localStorage.setItem('authToken', token);
        // setLoading(false);
        if (!result.msg) {
          navigate('/');
        }
        setError(result.msg);
      })
      .catch(err => console.log(err));
  };

  const handleClick = () => {};

  return (
    <div className="Home">
      <h1 className="hey-yo">Hey yo Meezoh!</h1>
      <p>Sign into your account</p>

      <Form onSubmit={handleSignin}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={13}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col sm={13}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col>
            <Button type="submit" onClick={handleClick}>
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <p className="register-here">
        Don't have an account? <a href="#">Register here</a>
      </p>
    </div>
  );
};

export default Home;
