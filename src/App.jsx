import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.number) {
      setTableData([...tableData, formData]);
      setFormData({ name: '', email: '', number: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div>
      

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
<br></br>
<br></br>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Phone</th>
            <th style={cellStyle}>Opration</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td style={cellStyle}>{data.name}</td>
              <td style={cellStyle}>{data.email}</td>
              <td style={cellStyle}>{data.number}</td>
              <td style={cellStyle}>
                <button onClick={() => handleDelete(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;