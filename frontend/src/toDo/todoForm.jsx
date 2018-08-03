import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class ToDoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){        
        this.props.search()
    }

    keyHandler(e){
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render(){
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input type="text" id="description" className="form-control" 
                    onKeyUp={this.keyHandler}
                    placeholder="Adicione uma Tarefa" 
                    value={this.props.description} onChange={this.props.changeDescription}/>
                </Grid>
        
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}></IconButton>
                    <IconButton style="info" icon='search' onClick={this.props.search}></IconButton>
                    <IconButton style="default" icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)