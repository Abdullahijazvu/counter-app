import React, {Component} from "react";
import Counter from './counter'

//props are used in entire application but state used only inside the component
//& props value can't be changed because props are readonly, as well you can change state value

class Counters extends Component{

    render(){
            const { onReset, onDelete, onIncrement, counters } = this.props
        return(
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">
            Reset</button>
            {counters.map(counter =>(
            <Counter key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            />
            ))}
        </div>
        )
    }
}

export default Counters