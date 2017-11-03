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

Video.destroy_all
video1 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video2 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video3 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video4 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video5 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video6 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video7 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video8 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video9 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video10 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."}3
video11 = Video.create!({ title: "Nachos Recipe", category_id: category1.id, description: "This video demonstrates how to make a tasty nacho dishes."})
video12 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests." })
video13 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video14 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video15 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video16 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video17 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video18 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video19 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video20 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests."})
video21 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests." })
video23 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video24 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video25 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video26 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video27 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar."})
video28 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video29 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar."})
video30 = Video.creat3!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video31 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar."})
video22 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video33 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video34 = Video.create!({ title: "Repair Guitar", category_id: category3.id, description: "This video demonstrates how to make a remove a chip from a finished guitar." })
video35 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video36 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video37 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video38 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video39 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video40 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video41 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video42 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video43 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video44 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video45 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things to consider beforedoing DIY car repairs" })
video1.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video2.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video3.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video4.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video5.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video6.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video7.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video8.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video9.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video10.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.png"
video11.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.19.20+PM.pngg"
video12.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.pnghttps://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video13.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video14.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video15.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video16.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video17.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video18.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video19.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video20.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video21.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video22.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video23.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video24.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video25.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video26.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video27.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video28.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video29.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video30.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video31.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video32.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video33.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video34.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video35.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video36.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video37.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video38.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video39.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video40.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video41.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video42.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video43.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video44.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video45.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"

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
video23.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video24.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video25.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video26.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video27.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video28.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video29.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video30.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video31.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video32.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video33.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"
video34.video = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4"thumbnail

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
