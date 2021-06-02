import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    // componentDidCatch() {
    //     this.setState({
    //         error: true
    //     })
    // }

    toggleRandomChar = () => {
        this.setState ((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {

        if(this.state.error){
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return(
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {char}
                        <button
                         className="btn btn-secondary" 
                         style={{marginBottom: '40px'}}
                         onClick={this.toggleRandomChar}>Toggle random character</button>
                    </Col>
                </Row>
                <CharacterPage/>
                {/* <CharacterPage/>
                <CharacterPage/> */}
            </Container>
        </>
     )};
};
