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
video1 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food."})
video2 = Video.create!({ title: "How to do some housework", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video3 = Video.create!({ title: "Chop Vegetables", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video4 = Video.create!({ title: "Chop Vegetables", category_id: category4.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video5 = Video.create!({ title: "Chop Vegetables", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video6 = Video.create!({ title: "Chop Vegetables", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video7 = Video.create!({ title: "Chop Vegetables", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video8 = Video.create!({ title: "Chop Vegetables", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video9 = Video.create!({ title: "Chop Vegetables", category_id: category5.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video10 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video11 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video12 = Video.create!({ title: "Chop Vegetables", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video13 = Video.create!({ title: "Chop Vegetables", category_id: category4.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video14 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video15 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video16 = Video.create!({ title: "Chop Vegetables", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video17 = Video.create!({ title: "Chop Vegetables", category_id: category4.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video18 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video19 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video20 = Video.create!({ title: "Chop Vegetables", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video21 = Video.create!({ title: "Chop Vegetables", category_id: category4.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video22 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video23 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video24 = Video.create!({ title: "Chop Vegetables", category_id: category3.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video25 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video26 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video27 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video28 = Video.create!({ title: "Chop Vegetables", category_id: category1.id, description: "This video demonstrates how to make a tasty vegetable mixture, which will add flavor to your food." })
video1.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video2.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video3.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video4.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video5.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video6.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video7.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video8.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video9.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video10.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video11.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video12.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video13.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video14.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video15.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video16.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video17.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video18.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video19.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video20.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video21.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video22.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video23.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video24.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"
video25.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/placeholder-thumb.png"

video1.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video2.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4"
video3.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video4.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video5.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video6.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video7.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video8.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video9.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video10.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video11.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4"
video12.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video13.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video14.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video15.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4"
video16.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video17.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video18.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video19.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4"
video20.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video21.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video22.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video23.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4"
video24.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"
video25.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/126/placeholder.mp4"

video1.save!
video2.save!
video3.save!
video4.save!
video5.save!
video6.save!
video7.save!
video8.save!
video9.save!
video10.save!
video11.save!
video12.save!
video13.save!
video14.save!
video15.save!
video16.save!
video17.save!
video18.save!
video19.save!
video20.save!
video21.save!
video22.save!
video23.save!
video24.save!
video25.save!
