const INITIAL_STATE = {
    numbers: [1,2,3]
}

export default function calcMedium(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_NUMBER':
            return { ...state, numbers: [...state.numbers, action.number] };
        case 'RESET':
            return { numbers: INITIAL_STATE.numbers };
        default:
            return state;
    }
}