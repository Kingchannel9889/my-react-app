import React, { useState } from 'react';
import './Contactus.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    surname: '',
    lastname: '',
    gender: 'male', // Set a default value for gender
    tel: '',
    country: '',
    age: '',
    referrer: '',
    bio: '',
    termsAndConditions: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission logic, for example, sending the data to a server.
    // For now, let's log the form data to the console.
    console.log(formData);
  };

  return (
    <div className="body_1">
    <div className="contact_us_form">
      <h1 className="reg_form">The Enquiry Form</h1>
      <p className="require">Please fill out this form with the required details in order to contact us</p>
      <form action="" className="form" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="surname">Enter Your Surname:</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />

          <label htmlFor="lastname">Enter Your Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />

          <p>Select Your Gender</p>
          <label htmlFor="male">
            <input type="radio" id="male" className="inline" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
          </label>

          <label htmlFor="female">
            <input type="radio" id="female" className="inline" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
          </label>

          <label htmlFor="not_to_say">
            <input type="radio" id="not_to_say" className="inline" name="gender" value="not_to_say" checked={formData.gender === 'not_to_say'} onChange={handleChange} />
            Prefer Not To Say
          </label>

          <br />

          <label htmlFor="email">Enter Your Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="tel">Enter Your Contact Number:</label>
          <input type="text" id="tel" name="tel" value={formData.tel} onChange={handleChange} required />

          <label htmlFor="country">Enter Your Country:</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <label htmlFor="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file" /></label>

          <label htmlFor="age">Input your age (years):</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} min="13" max="120" />

          <label htmlFor="referrer">How did you hear about us?</label>
          <select id="referrer" name="referrer" value={formData.referrer} onChange={handleChange}>
            <option value="#" disabled>(select one)</option>
            <option value="1">Facebook</option>
            <option value="2">YouTube Channel</option>
            <option value="3">Instagram</option>
            <option value="4">Other</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="bio">Tell Us:</label>
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="Why you want to contact us..." value={formData.bio} onChange={handleChange}></textarea>
        </fieldset>

        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleCheckboxChange} required />
          I accept the <a href="#">terms and conditions</a>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
