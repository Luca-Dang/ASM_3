import React, {ChangeEvent, useState} from 'react';
import './App.css';
import './index.css';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {MedicalForm} from "./components/MedicalForm";
import {MedicalRequestPage} from "./routes/MedicalRequestPage";
import {ListPage} from "./routes/ListPage";

function App() {
    const router  = createBrowserRouter([
        {path:"/",
        element: <Root/>,
        children: [
            {
            path:"/",
            element: <MedicalRequestPage/>
        },
            {path: "/list",
            element: <ListPage/>}]}
    ])
    return(
        <RouterProvider router={router}/>
    )
    function Root() {
        return (
            <div className={"root"}>
                <Outlet />
            </div>
        );
    }
}

export default App;
