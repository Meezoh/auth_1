import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

interface Props {
  title: string;
}

const AdminPanel = ({ title }: Props) => {
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, []);

  return (
    <div className="AdminPanel">
      {/* <h1 className="title">{title}</h1> */}

      <Table className="table" striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="id">
              <div>
                {['checkbox'].map((type, index) => (
                  <div className="mb-3">
                    <Form.Check
                      // type={type}
                      id={`default-${type}`}
                    />
                  </div>
                ))}
              </div>
            </th>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Last Login Time</th>
            <th>Registration Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="mb-3">
                <Form.Check />
              </div>
            </td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>dope</td>
            <td>asward</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>nigga</td>
            <td>@dude</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Istagram</td>
            <td>Top</td>
            <td>notch</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPanel;
