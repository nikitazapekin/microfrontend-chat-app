import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
// @ts-ignore
import {adminRoutes} from '@packages/shared/src/routes/admin'
 
 import styles from "./App.module.scss"
import "./test.scss"
export const App = () => {

    return (
        <div data-testid={'App.DataTestId'}>
           
            <Link to={adminRoutes.about}>ABOUT</Link>
          <div className={styles.test}>
            ffffffffffffff
          </div>
        {/*    <Outlet/> */}
        </div>
    );
};

//npm run start -w admin 
//npm run start -workspaces