import React, {Component} from 'react';
import ApiService from "../../ApiService";

import{
    TextField,
    Button,
    Typography
}from  "@material-ui/core";
class EditUserComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            id: '',
            firstName : '',
            lastName : '',
            age : '',
            salary : '',
            message : null
        }
    }

    componentDidMount(){
        this.loadUser();
    }

    loadUser = ()=>{
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
        .then(res=>{
            let user = res.data;
            this.setState({
                id: user.id,
                username: user.username,
                firstName : user.firstName,
                lastName: user.lastName,
                age: user.age,
                salary : user.salary
            })
        })
        .catch(err=>{
            console.log('loadUser() 에러', err);
        });
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    saveUser = (e)=>{
        e.preventDefault();

        let user = {
            username : this.state.username,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            salary : this.state.salary
        }
    
    
        ApiService.editUser(user)
        .then(res=>{
            this.setState({
                message : user.lastName + '님 정보가 수정되었습니다.'
            })
            this.props.history.push('/users');
        })
        .catch(err=>{
            console.log('sabeuser() 에러', err);
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                    <TextField type="text" name="username" readOnly={true} fullWidth margin="normal" value={this.state.username}/>
                    <TextField type="text" placeholder="Edit your first name" name="firstname" fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange}/>
                    <TextField type="text" placeholder="Edit your last name" name="lastname" fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange}/>
                    <TextField type="number" placeholder="Edit your age" name="age" fullWidth margin="normal" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="number" placeholder="Edit your salary" name="salary" fullWidth margin="normal" value={this.state.salary} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>

        )
    }
}
const style = {
    display : 'flex',
    justifyContent : 'center'
}
export default EditUserComponent;