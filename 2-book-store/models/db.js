const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'name is too short'],
        maxLength: [50, 'name is too long'],
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }
});

// create users model which will connect userSchema with users collection on database
const Users = mongoose.model('users', userSchema);

const connectionString = 'mongodb+srv://book_store_user:!234qweR@cluster0.rmrmn.mongodb.net/book_store_db?retryWrites=true&w=majority';

function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                // useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}

//  async function  connect() {
//     return new Promise((resolve, reject) => {
//         if (mongoose.connection.readyState === 1) {
//             resolve()
//         } else {
//             try{
//                 await mongoose.connect(connectionString, {
//                 useUnifiedTopology: true,
//                 useCreateIndex: true,
//                 useNewUrlParser: true
//             })
//             resolve()
//             }catch(error) {
//                 reject(error)
//             }
            
//         }
//     })
// }

/**
 * save user to database
 * @param {String} name 
 * @param {String} email 
 * @param {String} username 
 * @param {String} password 
 */
const registerUser = async (name, email, username, password) => {
    await connect();
    const newUser = new Users({
        name,
        email,
        username, 
        password,
        verified: false
    })
    const savedUser = await newUser.save();
    return savedUser;
}

module.exports = {
    registerUser
}

