# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create!({ email: "coolDude@gmail.com", password: "starwars" })

Category.destroy_all
category1 = Category.create!({ name: "Food", description: "Check out these videos to learn some awesome LifeProTips for cooking and preparing food!" })
category2 = Category.create!({ name: "Housework", description: "Check out these videos to learn some awesome LifeProTips for housework!" })
category3 = Category.create!({ name: "Music", description: "Check out these videos to learn some awesome LifeProTips for music!" })
category4 = Category.create!({ name: "Automobiles", description: "Check out these videos to learn some awesome LifeProTips for all things automobile!" })
category5 = Category.create!({ name: "Fashion", description: "Check out these videos to learn some awesome LifeProTips for Fashion!" })

Video.destroy_all
video1 = Video.create!({ title: "How to Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food."})
video2 = Video.create!({ title: "How to do some housework", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video3 = Video.create!({ title: "How to do some music stuff", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video4 = Video.create!({ title: "How to do some cars stuff", category_id: category4.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video5 = Video.create!({ title: "How to do some stylish things", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video6 = Video.create!({ title: "How to do some stylish things", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video7 = Video.create!({ title: "How to do some stylish things", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video8 = Video.create!({ title: "How to do some stylish things", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video9 = Video.create!({ title: "How to do some stylish things", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video1.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video2.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video3.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video4.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video5.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video6.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video7.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video8.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"
video9.thumbnail = "http://s3-us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/017/original/placeholder-thumb.png?1509048926"

video1.save!
video2.save!
video3.save!
video4.save!
video5.save!
video6.save!
video7.save!
video8.save!
video9.save!
