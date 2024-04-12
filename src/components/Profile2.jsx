import { Component } from "react";
class Profile2 extends Component {

    constructor(props) {
        console.log("child cons");

        super(props)
        this.state ={
            testing:{
                data : "empty",
            }
        }
    }

     componentDidMount() {
        //  new Promise(r => setTimeout(r,1000));
         console.log("child comp mount");
    }

    componentDidUpdate() {
        console.log("child comp update");
    }

    render() {
        console.log("child render");
        return (
            <>
            <h1>Hello CHild </h1>
            <h1>props testing : {this.state.testing.data}</h1>
            </>
        )
    }
}
export default Profile2; 