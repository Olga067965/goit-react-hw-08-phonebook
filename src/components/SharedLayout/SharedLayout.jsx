import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import { AppHeader } from 'components/AppHeader/AppHeader';

const SharedLayout = ({children}) => {
    return (
      <Fragment>
        <AppHeader />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Fragment>
    )
  }

  export default SharedLayout
