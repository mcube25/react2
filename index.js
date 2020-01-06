import React, {Component} from 'react';
import './Hello.css'





class Hello extends Component{
    render(){
        return(
        <div className ='f1 tc'>
            <h1>Hello world</h1>
            <p>{this.props.greeting}</p>
        </div>
        //the above is jsx which is adding html to js

        );
    }
}
export default Hello;