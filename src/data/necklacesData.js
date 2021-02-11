const database = require('../infra/database')

exports.getNecklaces = function () {
  return database.query('select * from necklaces.necklaces')
}

exports.saveNecklaces = function (necklaces) {
  return database.one('insert into necklaces.necklaces (name, contact, image, quantity, price) values ($1, $2, $3, $4, $5) returning *', 
    [
      necklaces.name,
      necklaces.contact,
      necklaces.image,
      necklaces.quantity,
      necklaces.price,
    ]
  )
}

exports.deleteNecklaces = function (id) {
  return database.none('delete from necklaces.necklaces where id = $1', [id])
}