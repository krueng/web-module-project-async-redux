import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getAyah, fetchFail } from './../actions';
import axios from "axios";

const Ayah = (props) => {
    const { ayah, isFetching, error, getAyah, fetchFail } = props;
    useEffect(() => {
        props.getAyah();
    }, []);

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching something from the book...</h2>
    }

    const handleClick = () => {
        props.getAyah();
    };

    return (
        <>
            <div>
                <h2>Ayah: {ayah.text}</h2>
            </div>
            <button onClick={handleClick}>Get new ayah</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        ayah: state.ayah,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getAyah, fetchFail })(Ayah);