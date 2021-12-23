import React from "react";
import { Spinner } from "@chakra-ui/spinner";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function LoadingIndicator(){
    
    return(
        
        <div >
            <Loader type="ThreeDots" color="#2BAD60" height={80} width={80} />
        </div>
        
        
    )
}