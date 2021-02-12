const database = require('../infra/database')

exports.getNecklaces = function () {
  return database.query('select * from necklaces.necklaces')
}

exports.getNecklace = function (id) {
  return database.oneOrNone('select * from necklaces.necklaces where id = $1', [id])
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

exports.updateNecklace = function (id, necklace) {
  return database.none('update necklaces.necklaces set name = $1, contact=$2, image = $3, quantity = $4, price = $5  where id =$6', 
    [ 
      necklace.name,
      necklace.contact,
      necklace.image,
      necklace.quantity,
      necklace.price,
      id
    ]
  )
}

exports.deleteNecklaces = function (id) {
  return database.none('delete from necklaces.necklaces where id = $1', [id])
}