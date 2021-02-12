const database = require('../infra/database')

exports.getBaths = function () {
  return database.query('select * from baths.baths')
}

exports.getBath = function (id) {
  return database.oneOrNone('select * from baths.baths where id = $1', [id])
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

exports.updateBath = function (id, bath) {
  return database.none('update baths.baths set name = $1, contact=$2, image = $3, namebath = $4, herbs = $5, atuation =$6, quantity = $7, price = $8  where id =$9', 
    [ 
        bath.name,
        bath.contact,
        bath.image,
        bath.namebath,
        bath.herbs,
        bath.atuation,
        bath.quantity,
        bath.price,
        id
  ])
}

exports.deleteBath = function (id) {
  return database.none('delete from baths.baths where id = $1', [id])
}