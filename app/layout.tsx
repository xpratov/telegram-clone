'use client'
import "./globals.css";
import React, { createContext, useState } from 'react';

const dataContext = createContext({});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const [contextData, setContextData] = useState(dataContext);
  const updateData = (newData:number) => {
    // setContextData(newData);
  };
  
  return (
  <dataContext.Provider value={{contextData, updateData}}>
    <html lang="en">
      <head>
        <title>Chat UI (by Khushnudbek)</title>
      </head>
      <body>{children}</body>
    </html>
  </dataContext.Provider>
  );
}
export {dataContext};
