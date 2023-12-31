import { useEffect, useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextAreaField';
import Header from '../../../components/header/Header';
import { ChevronRightIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('service_j0rly7w', 'template_dn3hfbp', values, 'gcoNowiecV9i2TAuy')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            fullName: '',
            email: '',
            role: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Showroom Near Me | Maruti Service Center In Gorakhpur
          Uttarpradesh
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Showroom Near Me | Maruti Service Center In Gorakhpur Uttarpradesh'
        />
        <meta
          name='description'
          content='Get in touch with Smartwheels to know more about location of Maruti Suzuki showrooms in Uttar Pradesh. Visit Now'
        />
      </Helmet>
      <div className='lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5'>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
          <h3 className='text-gray-700 mb-7 text-xl font-semibold'>
            Send us message
          </h3>
          <InputField
            value={values.fullName}
            handleChange={handleChange}
            label='Full Name'
            name='fullName'
            type='text'
            placeholder='John Doe'
          />
          <InputField
            value={values.email}
            handleChange={handleChange}
            label='E-Mail'
            name='email'
            type='email'
            placeholder='jphn@example.com'
          />
          <SelectField handleChange={handleChange} name='role' label='Role' />
          <TextareaField
            value={values.message}
            handleChange={handleChange}
            label='Your message here'
            name='message'
          />
          <button
            type='submit'
            className='mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none'
          >
            Send <ChevronRightIcon className='w-6 ml-2 float-right' />
          </button>
        </form>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className='px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center'>
    <p>your message submitted successfully</p>
  </div>
);

export default ContactForm;
