const initialState = [{username: 'test1', email: '123@gmail.com', password: '123'}];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
        return [action.payload, ...state];
    default:
        return state;
  }
}

export default registerReducer