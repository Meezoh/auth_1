import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const Home = ({ title }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<any>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
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
        // setLoading(false);
        if (result.msg) {
          setError(result.msg);
          setShow(true);
        } else {
          const token = result.user.token;
          localStorage.setItem('authToken', token);
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="Home">
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}

      <h1 className="title">{title}</h1>
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
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>

      <p className="register-here">
        Don't have an account? <Link to="/signup">Register here</Link>
      </p>
    </div>
  );
};

export default Home;
