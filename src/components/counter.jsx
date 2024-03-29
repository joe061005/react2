import React, { Component } from 'react';

class Counter extends Component {

    styles = {
       fontSize: 50,
       fontWeight:'bold'
    };

    //style= {this.styles}
    //const x modify    let can modify

    renderTags(){
        if (this.state.tags.length === 0){
            return <p>There are no tags!</p>;
        }
        return <ul>{this.state.tags.map(tg => <li key = {tg}>{tg}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){ 
        const {value} = this.props.counter;
        return value === 0? "Zero" : value;
    }


    render() { 
         console.log(this.props)

        return(
            <div>
               <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
               <button onClick= { () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
               <button onClick= { () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        ); 
    }

    
}
 
export default Counter;