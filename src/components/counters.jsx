import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    state = {  
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]

    }

    // same name, so setState({counters})

    handleDelete = (counterID) =>{
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters})
    }

    render() { 
        return (  
           <div>
              {this.state.counters.map(counter => (
                  <Counter 
                  key={counter.id} 
                  onDelete= {this.handleDelete} 
                  counter = {counter}
                  >
                  </Counter>
               ))}
           </div>
        );
    }
}
 
export default counters;