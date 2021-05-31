import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component {
    state = {
        showRandomChar: true
    }
    toggleRandomChar = () => {
        this.setState ((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        })
    }
    render() {
        return(
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {this.state.showRandomChar ? <RandomChar/> : null}
                        <button
                         className="btn btn-secondary" 
                         style={{marginBottom: '40px'}}
                         onClick={this.toggleRandomChar}>Toggle button</button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
     )};
};
