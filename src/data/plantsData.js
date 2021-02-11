const database = require('../infra/database')

exports.getPlants = function () {
  return database.query('select * from plants.plants')
}

exports.savePlant = function (plant) {
  return database.one('insert into plants.plants (name, contact, image, plantType, description, quantity, price) values ($1, $2, $3, $4, $5, $6, $7) returning *', 
    [
      plant.name,
      plant.contact,
      plant.image,
      plant.plantType,
      plant.description,
      plant.quantity,
      plant.price,
    ]
  )
}

exports.deletePlant = function (id) {
  return database.none('delete from plants.plants where id = $1', [id])
}