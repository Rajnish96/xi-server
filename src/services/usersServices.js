
const Users = require('../schemas/users')
const Documents = require('../schemas/documents')

const registerUser = async (req, res) => {
    try {
        const reqBody = req.body
        let data = new Users(reqBody[0])
        const documentsData = new Documents({ documents: reqBody[1] });
        const result = await data.save()
        return res.status(200).send({ message: `Successfully`, result, documentsData }).end()
    } catch (err) {
        return res.status(422).json(err).end()
    }
}

const getUserDetails = async (req, res) => {
    try {
        const { email } = req.body

        const data = await Users.find({ email: email })
        console.log(data);

        return res.status(201).send(data).end()
    } catch (err) {
        return res.status(500).send(err.message || `Internal Server Error`).end()
    }
}


module.exports = { registerUser, getUserDetails }
