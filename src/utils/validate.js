export default function validate(values){
     let errors={};

     if(!values.userName.trim()){
        errors.userName="UserName Required";
     }
     if(!values.email.trim()){
        errors.email="Email required"
     }
     else if(!/[a-z0-9._%+]+@[a-z0-9.\-]+.[a-z]{2,}/.test(values.email)){
        errors.email="Email address is invalid";
     }

     if(!values.password.trim()){
        errors.password="Password is required"
     }
     else if(values.password.length<6){
        errors.password="Password needs to be 6 characters or more"
     }

     if(!values.password2.trim()){
        errors.password2="Password required"
     }
     else if(values.password2!==values.password){
        errors.password2="Password do not match";
     }
     return errors;
}