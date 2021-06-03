import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import gotService from '../../services/gotService';


export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        // selectedHouse: 20
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
   
    toggleRandomChar = () => {
        this.setState ((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if(this.state.error){
            return <ErrorMessage/>
        }

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
                <Row>
                <Col md='6'>
                    <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllBooks}
                    // renderItem={(item) => (<><span>{item.name}</span><button>Click me!</button></>)}/>
                    renderItem={(item) => item.name}/>
                </Col>
                <Col md='6'>
                     <ItemDetails charId={this.state.selectedChar}/>
                </Col>
                </Row>
                 <Row>
                <Col md='6'>
                    <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllHouses}
                    renderItem={(item) => item.name}/>
                </Col>
                <Col md='6'>
                     <ItemDetails charId={this.state.selectedChar}/>
                </Col>
                </Row>
            </Container>
        </>
     )};
};
