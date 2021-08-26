import React from 'react';
import '../Styles/Input.css';

class Input extends React.Component{
    state = {
        name:"",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === ""){
            alert("Enter Name");
            return;
        }
        this.props.addOn(this.state);
        this.setState({name:""});
    }
    render(){
        return(
            <form action="" onSubmit={this.add}>
            <div className="box">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" name="name"  onChange={ (e) => this.setState({name: e.target.value})}/>
                <button>Submit</button>
            </div>
            </form>
        )
    }
}

export default Input;