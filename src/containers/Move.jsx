import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

function Move() {
    useEffect(() => {document.getElementById("title").innerHTML = "Loading..."}, []);
    return (
        <>
            <Loading />
            <Redirect to='/users/home' />
        </>
    );
}

export default Move;