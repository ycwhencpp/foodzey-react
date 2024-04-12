import {Component} from "react";
import Profile2 from "./Profile2";
class ProfileClass extends Component {

    constructor (props) {
        console.log("constructor");
        console.log(props);
        super(props);
        this.state = {
            userInfo: {
                name : 'default',
                age : 'default',
            }

        }
        console.log(props);

    }

    componentDidMount() {
        console.log("comp did mount");
        this.setState({
            userInfo: {
                name: 'anurag',
                age: '22',
            }  
        }); 
        this.timer = setInterval(() =>{
            console.log("st");
        },1000);       


        document.querySelector(".click").addEventListener('click', function() {
            console.log("clicked");
        });

        
    }

    componentDidUpdate() {
        console.log("comp update");
    }

    componentWillUnmount() {
        console.log("comp unmount");
        clearInterval(this.timer);
        // document.getElementById("click").removeEventListener('click');


    }

    render () {
        console.log("render");

        return (
            <div className="profile">
                 <h1>Profile:</h1>
                 <h2>name: {this.state.userInfo.name}</h2>
                 <h2>age: {this.state.userInfo.age}</h2>
                 <button className="click"> click me </button>
                 <Profile2/>
            </div>

        )
    }
}

export default ProfileClass;