import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { HelmetProvider } from 'react-helmet-async';
import { Fragment } from 'react';

export default function Login() {
  return (
    <Fragment>
      <HelmetProvider>
      <Helmet>
        <title >Login</title>
      </Helmet>
      <LoginForm />
      </HelmetProvider>
    </Fragment>
  );
}
