/**
 * Created by DIMOS on 02.04.2017.
 */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Panel, Button } from 'react-bootstrap';
import { Glyphicon, ProgressBar } from 'react-bootstrap';
import { Danger } from '../components/alerts';
import { selectTodos } from './selectors';
import TodoList from '../components/TodoList';
import * as todoActions from '../actions/todoActions';
import * as filterActions from '../actions/filterActions';

class TodoPage extends PureComponent {
    componentDidMount() {
        this.props.actions.fetchTodos();
    }

    render() {
        const { todoItems, fetching, currentTodo, error, actions } = this.props;
        return (
            <Row>
                <Panel header="My ToDo List" bsStyle="primary">
                    {
                        error && <Danger error={error}/>
                    }
                    {
                        fetching && <ProgressBar active now={100} label="Loading..."/>
                    }
                    {
                        !fetching && <TodoList todoItems={todoItems} currentTodo={currentTodo} actions={actions}/>
                    }
                    <Button type="button" disabled={fetching} bsStyle="primary" onClick={actions.fetchTodos}>
                        <Glyphicon glyph="refresh"/>
                        {' Refresh'}
                    </Button>
                </Panel>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoItems: selectTodos(state),
        fetching: state.todo.fetching,
        currentTodo: state.todo.currentTodo,
        error: state.todo.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...todoActions, ...filterActions }, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);