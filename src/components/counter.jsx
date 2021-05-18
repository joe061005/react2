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



    render() {  

        return(
            <div>
               {this.state.tags.length === 0 && "Please create a new tag!"}
               {this.renderTags()}
            </div>
        ); 
    }

    
}
 
export default Counter;