const INITIAL_STATE = {
    data: [
        'Angular',
        'Java',
        'PHP'
    ],
}

export default function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}