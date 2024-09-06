import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomAlert from './CustomAlert'; // Ensure this import is correct
import './App.css'; // Import custom CSS for footer styling

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ftwfsaa', 'template_3dfbt4t', formData, '2bxhs8tGm6ECaZA7q')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Show success alert
        setAlertMessage('Feedback submitted successfully!');
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          feedback: ''
        });
        // Automatically hide alert after 5 seconds
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        // Show error alert
        setAlertMessage('Failed to submit feedback. Please try again.');
        // Automatically hide alert after 5 seconds
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      });
  };

  const closeAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert} />}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Contact Information</h5>
              <p><strong>Name:</strong> Yash Prajapati</p>
              <p><strong></strong> <a href="mailto:yashprajapati559@gmail.com" className="text-light"><FontAwesomeIcon icon={faEnvelope} /> Yashprajapati1559@gmail.com</a></p>
              <p><strong></strong> <a href="https://www.linkedin.com/in/yashprajapati559/" className="text-light" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> Yash Prajapati</a></p>
              <p><strong></strong> <a href="https://github.com/yashprajapati559" className="text-light" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Yash Prajapati</a></p>
            </div>
            <div className="col-md-6">
              <h5>Send Feedback</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-light">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="feedback" className="form-label text-light">Feedback</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows="3"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-light" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
