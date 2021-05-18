import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        tags: []
       
    };

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
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){ 
        const {count} = this.state;
        return count === 0? "Zero" : count;
    }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({count: this.state.count+1});
    }

    render() {  

        return(
            <div>
               <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
               <button onClick= {() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        ); 
    }

    
}
 
export default Counter;