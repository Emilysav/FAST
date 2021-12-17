export default function validateInfo(values) {
    let errors ={};

    if (!values.username.trim()){
        errors.username = "Username Required"
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password){
        errors.password = "Password Required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be longer than 6 characters"
    }

    if (!values.password2){
        errors.password2 = "Confirmation required"
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return errors;

}