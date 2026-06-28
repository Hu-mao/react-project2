// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './dz1106.tsx'
// import App2 from './dz1106.tsx'
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//       {/*<App*/}
//       {/*    name="F1"*/}
//       {/*    director="smb"*/}
//       {/*    ProdYear={2040}*/}
//       {/*    fStudio="s"*/}
//       {/*/>*/}
//       <App2></App2>
//   </StrictMode>,
// )

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);