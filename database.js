const mongoose = require('mongoose');

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect('mongodb+srv://Admin:Password@twittercluster.25hzj.mongodb.net/TwitterDB?retryWrites=true&w=majority')
            .then(() => {
                console.log('Database Connected...');
            })
            .catch((err) => {
                console.log('DB Error: ' + err);
            })
    };
};

module.exports = new Database();

