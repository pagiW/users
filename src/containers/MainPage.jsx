import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import UserCard from '../components/UserCard';
import { delet } from '../actions';

function MainPage({ users, delet }) {
    let [data, setData] = useState({
        loading: true,
    });
    function setPage() {
        setTimeout(() => {setData({
            loading: false,
        })}, 1500);
    }
    useEffect(() => {
        setPage();
        document.getElementById("title").innerHTML = "Users";
    }, []);
    return (
        <main style={{textAlign: 'center'}}>
            { !data.loading ?
                users.length > 0 ? users.map(user => <><UserCard key={user.name} {...user} edit='true' /><br /><button className='deletebutton' onClick={() => delet(user.password)}>delete</button></>)
                :
                <h1>there are not users:<br /><Link className='aButton' to='/users/form'>create the yours!</Link></h1> : <Loading /> }
        </main>
    )
}

const mapDispatchToProps = {
    delet,
};

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);