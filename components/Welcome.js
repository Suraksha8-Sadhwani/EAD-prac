import React, {Component} from "react";

class Welcome extends Component{
    render() {
        return <h1>Welcome {this.props.name}a.k.a{this.props.nickname}</h1>
    }
}
export default Welcome
