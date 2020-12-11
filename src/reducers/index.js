const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            const exist = state.users.find(user => action.payload.email === user.email || action.payload.password === user.password);
            if (exist) {
                return {...state}
            } else {
                return {
                    ...state,
                    users: [action.payload, ...state.users]
                }
            }
        case 'EDIT':
            let myUser = state.users.find(user => action.payload.email === user.email);
            const correct = myUser.password === action.payload.password && myUser.email === action.payload.email;
            const myUsers = state.users.filter(users => action.payload.email !== users.email);
            if (correct) {
                return {
                    ...state,
                    users: [action.payload, ...myUsers],
                }
            } else {
                return {...state};
            }
        default:
            return {...state};
    }
}

export default reducer;