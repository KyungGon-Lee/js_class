# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
20.times do
Board.create(
  title: Faker::Superhero.name,
  contents: Faker::Superhero.name,
  user_id: 1
)

end
User.create(
  email: "aa@a.a",
  password: "123123"
)
