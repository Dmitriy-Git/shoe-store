
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password } = req.body

        if (!email || !password) return next('Некорректный email или password')

        const candidate = await User.findOne({where: { email }})

        if (candidate) return next('Пользователь с таким email уже существует')
        
        const user = await User.create({ email, password })

        const token = generateJwt(user.id, user.email)

        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body

        const user = await User.findOne({where: { email }})

        if (!user) return next('Пользователь не найден')
    
        
        if (password !== user.password) return next('Указан неверный пароль')
    
        const token = generateJwt(user.id, user.email)
        
        return res.json({token})
    }

    check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email)

        return res.json({ token })
    }
}

module.exports = new UserController()