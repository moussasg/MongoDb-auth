import React from "react";
import axios from "axios";
class Formul extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }
    handelsubmit = (event) => { // /début de handel
        event.preventDefault()
        const {email , password} = this.state
        axios.post('http://localhost:3001/api/users/', {email,password})
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log('érreur si produit lors de insertion', error)
        })
        this.setState = {
            email:'',
            password:'',
        }
    } // fin de handelsubmit
    handelchange = (event) => { /// name li homa email et password
        const {name , value} = event.target
            this.setState = {
                name:[value] /// this.setstate t3e {this.state.email} et this.setStete t3e {this.state.password}
            }
    }
    render(){
        return(
<>
<form onSubmit={this.handelsubmit}>
email <input name="email" type="email" value={this.state.email} onChange={this.handelchange}></input>
password <input name="password" type="password" value={this.state.password} onChange={this.handelchange}></input>             
</form>
            </>
        )
    }
}