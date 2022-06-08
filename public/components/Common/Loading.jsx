import React from "react";
import {Container, Loading} from '@nextui-org/react';

function LoadingScreen(props) {
    return (
        <div  data-testid="custom-element" className={props.loading ? 'body_loading': 'body_loading-none'}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", height: "200px"}}>
                <p>loading your tasks...</p>
                <Loading color="white" type="points" size={10}/>
            </div>
        </div>
    );
}

export default LoadingScreen;
