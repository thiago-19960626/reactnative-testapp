import { API_URL } from '../constants';

function login (email, password){
    var formData = new FormData();
    formData.append('user[email]', email);
    formData.append('user[password]', password);

    return new Promise((resolve, reject) => {
        fetch(API_URL + 'auth', {
            method: 'POST',
            body: formData
        })       
        .then((res) => res.json()) 
        .then((data) => {
            console.log("Login API call Success:", data);
            if(data.token){
                resolve(data.token);
            }else{
                reject(data.errors);
            }
        })
        .catch(err => {
            console.log("Login API call Error", err);
            reject(["please check network connection."]);
        });
    });    
}

module.exports = {
    login
};