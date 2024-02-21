var logger = function(){ 
    console.log("initialise new logger");
    return {
        log : function(message){
            let time = '';
            if (this.showtime){
                time = new Date().toTimeString();
            }else{
                time = '## ';
            }
            console.log(time + ":" + message);
        },
        showtime: true
    }
}

module.exports = logger;