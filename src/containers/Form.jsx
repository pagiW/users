import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { create } from '../actions';
import UserCard from '../components/UserCard';
import '../styles/form.css'

const Form = ({ users, create, history }) => {
    let [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    let [complete, setComplete] = useState(true);
    let [exist, setExist] = useState(false);
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    function handleClick() {
        if (form.name && form.email && form.password) {
            setComplete(true);
            const itExist = users.find(user => user.email === form.email || user.password === form.password);
            if (itExist) {
                setExist(true);
            } else {
                setExist(false);
            }
            create(form);
        } else {
            setComplete(false);
        }
    }
    useEffect(() => {
        document.getElementById("title").innerHTML = "Form";
    })
    return (
        <main className='form'>
            <UserCard name={form.name || 'Your Name'} email={form.email || 'Your Email'} />
            <form onSubmit={e => {
                    e.preventDefault();
                    if (complete && !exist) {
                        history.push('/users/home');
                    }
                }}>
                <label htmlFor='name' className='normal'>name</label>
                <input type="text" name="name" autoComplete='name' placeholder='your name' id='name' required onChange={handleChange} />
                <label htmlFor='email' className='normal'>email</label>
                <input type="text" name="email" autoComplete='email' placeholder='your email' id='email' required onChange={handleChange} />
                <label htmlFor='password' className='normal'>password</label>
                <input type="password" name="password" autoComplete='password' placeholder='password' id='password' required onChange={handleChange} />
                <button onClick={handleClick}>create</button>
                {!complete && <h1 className='complete' style={{color: "red"}}>complete everything!</h1>}
                {exist && <h1 style={{color: "red"}}>your email or password already exists!</h1>}
            </form>
        </main>
    );
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = {
    create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);