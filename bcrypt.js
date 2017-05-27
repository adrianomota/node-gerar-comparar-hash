const bcrypt = require('bcryptjs')

exports.hash = (pass) => bcrypt.hashSync(pass)

exports.comparar = (pass,hash) => bcrypt.compareSync(pass, hash)