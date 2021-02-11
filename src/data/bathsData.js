const database = require('../infra/database')

exports.getBaths = function () {
  return database.query('select * from baths.baths')
}

exports.saveBath = function (baths) {
  return database.one('insert into baths.baths (name, contact, image, namebath, herbs, atuation, quantity, price) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *', 
    [
      baths.name,
      baths.contact,
      baths.image,
      baths.namebath,
      baths.herbs,
      baths.atuation,
      baths.quantity,
      baths.price,
    ]
  )
}

exports.deleteBath = function (id) {
  return database.none('delete from baths.baths where id = $1', [id])
}