const errorMessage = (statusCode , statusMessage , status )=>{
    const error = new Error(statusMessage) ; 
    error.statusCode = statusCode; 
    error.status = status; 
    return error;
}
module.exports = { errorMessage };
