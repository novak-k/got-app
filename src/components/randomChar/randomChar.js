import React, {useEffect, useState} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

const RandomChar = ({interval}) => {
    const [charState, setCharState] = useState ({char: {}, loading: true, error: false});
   
    const service = new gotService();
    let timerId;

    useEffect(() => {
        updateChar();
        timerId = setInterval(updateChar, interval);
    }, []);

    useEffect(() => {
        clearInterval(timerId);
    }, []);
    
    
    function onCharLoaded (char) {
        setCharState({
            char,
            loading: false
        })
    }

    function onError(err) {
        setCharState({
            error: true,
            loading: false
        })
    }

    function updateChar() {
        const id = Math.floor(Math.random()*140 + 25); //25-140 char
        
        service
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }


        const {char, loading, error} = charState;


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null; 
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
              {errorMessage}
              {spinner}
              {content}
            </div>
        );
    
}

RandomChar.defaultProps = {
        interval: 15000
}
RandomChar.propTypes = {
    interval: PropTypes.number
}   

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return(
        <>
            <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}
export default RandomChar;