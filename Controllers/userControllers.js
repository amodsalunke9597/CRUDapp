const User = require('../Model/userModel.js')

exports.home = (req, res) => {
    res.send("<h1>Home Response</h1>") 
}


exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error('name & email are required')
        }

        //check if user is already registered
        const userExists = await User.findOne({email: email})

        if(userExists){
            throw new Error('User already exists')
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: 'user created successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find({});
        if(!users){
            throw new Error('no any user exists')
        }

        res.status(200).json({
            success: true,
            message: 'fetched all the users successfully',
            users
        })
    } catch (error) {
        
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to get all the users'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(201).json({
        success: true,
        message: 'user updated successfully',
        user
    })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to delete the user'
        })
    }
    
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);

        res.status(201).json({
            success: true,
            message: 'this user deleted permenently',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to delete the user'
        })
    }
}