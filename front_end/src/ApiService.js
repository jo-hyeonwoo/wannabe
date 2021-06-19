import axios from "axios";


const USER_API_BASE_URL = "http://localhost:8080/users";

class ApiService{

    fetchUsers(){
        return axios.get(USER_API_BASE_URL+'/');
    }

    fetchUserByID(userID){
        return axios.get(USER_API_BASE_URL+'/'+userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL+'/'+userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL+'/', user, {
            headers:{
                "Content-Type" : 'application/json'
            }
        }).then((res)=>console.log(res));
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL+'/'+user.id, user);
    }
}
export default new ApiService();
