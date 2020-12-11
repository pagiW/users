import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { edit } from '../actions';
import UserCard from '../components/UserCard';
import '../styles/form.css'

const Edit = ({ users, edit, history, match }) => {
    let myUser = users.find(user => user.email === match.params.email);
    let [form, setForm] = useState({
        name: myUser.name,
        email: myUser.email,
        password: ''
    });
    let [complete, setComplete] = useState(true);
    let [correct, setCorrect] = useState(true);
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    function handleClick() {
        if (form.name && form.email && form.password) {
            setComplete(true);
            if (form.password !== myUser.password || form.email !== myUser.email) {
                setCorrect(false);
            } else {
                setCorrect(true);
            }
            edit(form);
        } else {
            setComplete(false);
        }
    }
    useEffect(() => {
        document.getElementById("title").innerHTML = `Edit: ${match.params.email}`;
    })
    return (
        <main className='form'>
            <UserCard name={form.name || 'Your Name'} email={form.email || 'Your Email'} />
            <form onSubmit={e => {
                    e.preventDefault();
                    if (complete && correct) {
                        history.push('/users/home');
                    }
                }}>
                <label htmlFor='name' className='normal'>new name</label>
                <input type="text" name="name" autoComplete='name' placeholder='new name' id='name' required onChange={handleChange} />
                <label htmlFor='email' className='normal'>your email</label>
                <input type="text" name="email" autoComplete='email' placeholder='your email' id='email' required onChange={handleChange} />
                <label htmlFor='password' className='normal'>your password</label>
                <input type="password" name="password" autoComplete='password' placeholder='your password' id='password' required onChange={handleChange} />
                <button onClick={handleClick}>edit</button>
                {!complete && <h1 className='complete' style={{color: "red"}}>complete everything!</h1>}
                {!correct && <h1 className='complete' style={{color: "red"}}>the password or the email is not correct!</h1>}
            </form>
        </main>
    );
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = {
    edit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);