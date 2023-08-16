import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  

  return (
    <div>
      <h2>JSONPlaceholder Data</h2>
      <Table striped bordered hover className='custom-table'>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
