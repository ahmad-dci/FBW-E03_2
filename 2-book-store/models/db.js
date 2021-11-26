const mongoose = require('mongoose');
require('dotenv').config()
const bcrypt = require('bcryptjs');


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

const connectionString = process.env.DB_CONNECTION;

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
        password : await encrypt(password),
        verified: false
    })
    const savedUser = await newUser.save();
    return savedUser;
}

/**
 * 
 * @param {*} username 
 * @returns 
 */
const checkUserName = async (username) => {
    await connect();
    const user = await Users.findOne({username});
    return user;
}
/**
 * 
 * @param {*} email 
 * @returns 
 */
const checkUserEmail = async (email) => {
    await connect();
    const user = await Users.findOne({email});
    return user;
}

/**
 * confirm user email by its Id
 * @param {string} id 
 * @returns 
 */
const confirmEmail = async (id) => {
    await connect();
    const user = await Users.findOneAndUpdate({_id: id}, {verified: true});
    return user;
}

const encrypt = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err)
            } else {
                resolve(hash)
            }
        })
    })
} 

module.exports = {
    registerUser,
    checkUserName,
    checkUserEmail,
    confirmEmail
}


// encrypted password of '12345678' '$2a$10$cqsRVcMshJsXDfR2wbI41.0at11Zc06vvPPnlzLZh0pKr6qNlsx/C'
//                                   $2a$10$J25zUdmE/5PV.z3AnMiWWe6rj8.uCgm9xtdG/s0cGy48eRxGXmz6G

