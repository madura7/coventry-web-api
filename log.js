////Previous Code
// var logInfoMessage = function(message){
//     console.log("Info: " + message)
// }

// var logErrorMessage = function(message){
//     console.log("Error: " + message)
// }

// var logWarningMessage = function(message){
//     console.log("Danger: " + message)
// }

//logInfoMessage("Application is starting up!!")
//logErrorMessage("Application is runnng out  of space!")
//logWarningMessage("Application has crashed!")

// module.exports.logInfo = logInfoMessage
// module.exports.logWarning = logWarningMessage 
// module.exports.logError = logErrorMessage 


var log = {
    logWarningMessage : function(message){
        console.log("Danger: " + message)
    },
    logErrorMessage : function(message){
        console.log("Error: " + message)
    },  
    logInfoMessage : function(message){
        console.log("Info: " + message)
    } 
}

module.exports = log;


