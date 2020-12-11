export const create = (payload) => ({
    type: 'CREATE',
    payload,
});

export const edit = (payload) => ({
    type: 'EDIT',
    payload,
});

export const delet = (payload) => ({
    type: 'DELETE',
    payload,
});