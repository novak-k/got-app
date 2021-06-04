import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { withRouter } from 'react-router-dom';
import {Row, Col} from 'reactstrap';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {

        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Row>
                <Col lg={5}>
                    <ItemList
                        onItemSelected={(itemId) => {
                            this.props.history.push(itemId)
                        }}
                        getData={this.gotService.getAllBooks}
                        renderItem={({ name }) => name} />
                </Col>
            </Row>

        )
    }
}

export default withRouter(BooksPage);