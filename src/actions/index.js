import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getAyah = () => dispatch => {
    dispatch(fetchStart());
    const rand = Math.floor(Math.random() * 6237)
    
    axios.get(`http://api.alquran.cloud/v1/ayah/${rand}/en.asad`)
        .then(resp => {
            dispatch(fetchSuccess(resp.data.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (ayah) => {
    return ({ type: FETCH_SUCCESS, payload: ayah });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}