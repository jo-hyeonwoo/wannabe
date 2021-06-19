import React, {Component} from 'react';
import ApiService from "../../ApiService";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Typography
  } from "@material-ui/core";

  import {
    Create,
    Delete
  } from '@material-ui/icons';

class UserListComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            users:[],
            message: null
        }
    }

    componentDidMount(){
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
        .then(res=>{
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }

    deleteUser = (userID)=>{
        ApiService.deleteUser(userID)
        .then(res=>{
            this.setState({
                message : 'User Deleted Successfully.'
            });
            this.setState({
                users:this.state.users.filter(user=>
                    user.id !== userID)
            });
        })
        .catch(err=>{
            console.log('deleteUser() Error!', err);
        })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.history.push("/edit-user");
    }
    addUser=()=>{
        window.localStorage.removeItem("userID");
        this.props.history.push("/add-user");
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}>Add User</Button>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>FirstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.users.map(user=>
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="user">{user.id}</TableCell>
                            <TableCell align="right">{user.firstName}</TableCell>
                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.username}</TableCell>
                            <TableCell align="right">{user.age}</TableCell>
                            <TableCell align="right">{user.salary}</TableCell>
                            <TableCell onClick={()=>this.editUser(user.id)}><Create/></TableCell>
                            <TableCell onClick={()=>this.deleteUser(user.id)}><Delete/></TableCell>
                        </TableRow>
                        )}
                </TableBody>
            </Table>
        </div>
            
        )
    }

}
const style={
 display : 'flex',
 justifyContent : 'center'
}
export default UserListComponent;