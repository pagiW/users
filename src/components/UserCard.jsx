import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';

class UserCard extends React.Component {
    render() {
        return (
            <>
            <div className='card' aria-label={`user: ${this.props.name}`}>
                <div className='bigTxt'>{this.props.name}</div>
                <div className='normal'>{this.props.email}</div>
            </div>
            {this.props.edit && <Link to={`/users/${this.props.email}/edit`} className='aButton2'>Edit user</Link>}
            </>
        );
    }
}

export default UserCard;