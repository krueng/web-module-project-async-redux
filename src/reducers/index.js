import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    ayah: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                ayah: '',
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                ayah: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                ayah: '',
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    };
};