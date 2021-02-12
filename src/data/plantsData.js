const database = require('../infra/database')

exports.getPlants = function () {
  return database.query('select * from plants.plants')
}

exports.getPlant = function (id) {
  return database.oneOrNone('select * from plants.plants where id = $1', [id])
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

exports.updatePlant = function (id, plant) {
  return database.none('update plants.plants set name = $1, contact=$2, image = $3, plantType = $4, description = $5, quantity = $6, price = $7  where id =$8', 
    [ 
      plant.name,
      plant.contact,
      plant.image,
      plant.plantType,
      plant.description,
      plant.quantity,
      plant.price,
      id
    ]
  )
}

exports.deletePlant = function (id) {
  return database.none('delete from plants.plants where id = $1', [id])
}