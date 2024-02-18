// theme-context
// import { createContext } from 'react';

// export const MenuContext = createContext({
//   menu: [
//     {
//         title: 'Journals',
//         icon: 'icon-magnify',
//         path:'/'
//     },
//     {
//         title: 'Categories',
//         icon: 'icon-magnify',
//         path:'/'
//     },
//     {
//         title: 'People',
//         icon: 'icon-magnify',
//         path:'/'
//     },
// ],
//   setMenu: () => {},
// });

import React, { useState, createContext } from "react";
export const CreateContext = createContext();

export const CreateContextProvider = (props) => {
  const [menu, setMenu] = useState(
    [{
      home: [
        {
           title: 'Journals',
           icon: 'icon-magnify',
           path:'/'
        },
        {
           title: 'Categories',
           icon: 'icon-magnify',
           path:'/'
        },
        {
           title: 'People',
           icon: 'icon-magnify',
           path:'/'
        },
      ],
      settings: [
        {
           title: 'Privacy',
           icon: 'icon-inner-menu-icon',
           path:'/settings/privacy'
        },
        {
           title: 'Password',
           icon: 'icon-inner-menu-icon',
           path:'/settings/password'
        },
        {
           title: 'Payment',
           icon: 'icon-inner-menu-icon',
           path:'/settings/payment'
        },
      ],

    }],
  );

  return (
    <CreateContext.Provider value={ {menu, setMenu} }>
      {props.children}
    </CreateContext.Provider>
  );
};
