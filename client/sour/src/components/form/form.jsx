import React, { useState } from 'react';
import "./form.css"


function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to a server
    console.log('Submitted:', {
      name,
      email,
      organizationName,
      logo,
      description,
    });
    setName('');
    setEmail('');
    setOrganizationName('');
    setLogo(null);
    setDescription('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className='formContainer'>
      <h2 className='TitleA'>Register a club?</h2>

      <div className="Name">
        <label htmlFor="name">Submitters Name:</label>
        <input
          type="text"
          className='formTextBoxB' //Class
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className="EmailBox">
        <label htmlFor="email">Your Email:</label> 
        <input
          type="email"
          id="email"
          className='EmailBoxText' //Class
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className="OrgName">
        <label htmlFor="organizationName">Organization Name:</label>
        <input
          type="text"
          id="organizationName"
          className='formTextBoxB' //Class
          value={organizationName}
          onChange={handleOrganizationNameChange}
          placeholder='organizationName'
          required
        />
      </div>

      <div className="UploadBox">
        <label htmlFor="upload">Organization Logo:</label>
        <input
          type="file"
          id="logo"
          className='uploadBox'  //Class
          onChange={handleLogoChange}
          accept="image/*"
          required
        />
      </div>

      <div className="DescriptionBox">
        <label htmlFor="description">Organization Description:</label>
        <textarea
          id="description"
          className='descriptionBoxText' //Class
          value={description}
          onChange={handleDescriptionChange}
          required
          rows={2}
        />
      </div>

      <div className="SubmitButton"> <button type="submit">Submit</button> </div>

    </div>
    </form>
  );
};

export default Form;
