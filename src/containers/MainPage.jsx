import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import UserCard from '../components/UserCard';

function MainPage({ users }) {
    let [data, setData] = useState({
        data: [],
        loading: true,
    });
    function setPage() {
        setTimeout(() => {setData({
            data: users,
            loading: false,
        })}, 1500);
    }
    useEffect(() => {
        setPage();
        document.getElementById("title").innerHTML = "Users";
    }, [])
    return (
        <main style={{textAlign: 'center'}}>
            { !data.loading ?
                data.data.length > 0 ? data.data.map(user => <UserCard key={user.name} {...user} edit='true' />)
                :
                <h1>there are not users:<br /><Link className='aButton' to='/users/form'>create the yours!</Link></h1> : <Loading /> }
        </main>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, null)(MainPage);