const validate = () => {
  if (!formData.name) {
    alert('Name is required');
    return false;
  }
  if (!formData.email.includes('@')) {
    alert('Invalid email');
    return false;
  }
  if (!formData.age || isNaN(formData.age)) {
    alert('Age must be a number');
    return false;
  }
  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  // lanjut ke submit ke backend
  submitData(formData);
};
