import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  title: string;
}

const Register = ({ title }: Props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<any>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const details = { name, email, password };

  const handleSignin = (e: any) => {
    e.preventDefault();

    fetch('https://admin-be.herokuapp.com/api/v1/signup', {
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(details),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
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

  return (
    <div className="Register">
      <h1 className="title">{title} Sign Up</h1>
      <Form onSubmit={handleSignin}>
        <Col>
          <Form.Control
            className="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </Col>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={13}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={13}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
