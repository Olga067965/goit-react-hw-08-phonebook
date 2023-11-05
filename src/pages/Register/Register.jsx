import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Fragment } from 'react';


export default function Register() {
  return (
    <Fragment>
      <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      </HelmetProvider>
    </Fragment>
  );
}
