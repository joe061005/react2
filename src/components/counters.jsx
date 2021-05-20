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
        this.setState({counters});
    }

    handleReset = () =>{
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleIncremnet = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters})
    };

    render() { 
        return (  
           <div>
               <button onClick = {this.handleReset} 
               className="btn btn-primary btn-sm m-2">Reset</button>
              {this.state.counters.map(counter => (
                  <Counter 
                  key={counter.id} 
                  onDelete= {this.handleDelete} 
                  onIncrement = {this.handleIncremnet}
                  counter = {counter}
                  >
                  </Counter>
               ))}
           </div>
        );
    }
}
 
export default counters;