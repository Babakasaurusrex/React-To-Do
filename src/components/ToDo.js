import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);

  }
   render() {

     return (

       <li>

         <input type="checkbox" checked={ this.props.todo.isCompleted } onChange ={ this.props.toggleComplete } />
         <span>{ this.props.todo.description }</span>
         <button type="button" onClick={()=> this.props.deleteTodo(this.props.todo) }>Delete </button>


       </li>
     );
   }
 }

 export default ToDo;
