import React, { useState } from 'react';

function MyForm() {
  const initialForm = { name: '', age: '', email: '' };
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleReset = () => {
    setFormData(initialForm);  // reset ke nilai awal
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="button" onClick={handleReset}>Reset</button>
      {/* submit button nanti */}
    </form>
  );
}
