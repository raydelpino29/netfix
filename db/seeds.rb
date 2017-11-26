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
video2 = Video.create!({ title: "DIY Party Food", category_id: category1.id, description: "This video will teach you how to cook tasty treats for a party!"})
video3 = Video.create!({ title: "Dessert Treats", category_id: category1.id, description: "This video gives you some yummy food ideas for DIY desserts."})
video4 = Video.create!({ title: "Vegan Junk Food", category_id: category1.id, description: "This video demonstrates how to make some amazing vegan junk food!"})
video5 = Video.create!({ title: "Cupcake Decoration", category_id: category1.id, description: "This video demonstrates how to create artistic decoration for your cupcakes."})
video6 = Video.create!({ title: "Vegan Recipes", category_id: category1.id, description: "This video gives you great directions for making 2 declicious vegan recipes."})
video7 = Video.create!({ title: "Vegan Mac & Cheese", category_id: category1.id, description: "This video demonstrates how to cook some healthy, vegan mac and cheese!"})
video8 = Video.create!({ title: "Paleo Mayo", category_id: category1.id, description: "This video demonstrates how to make a tasty mayonnaise for those on the paleo diet."})
video9 = Video.create!({ title: "Healthy Meal Prep", category_id: category1.id, description: "This video demonstrates how to prep your meals to save money, save time, and stay in shape."})
video10 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests." })
video11 = Video.create!({ title: "Install Backsplash", category_id: category2.id, description: "This video demonstrates how to install a tile backsplash within your home."})
video12 = Video.create!({ title: "Speed Up Chores", category_id: category2.id, description: "This video demonstrates 6 clever tips to increase the speed of completing your chores."})
video13 = Video.create!({ title: "Housecleaning Tips", category_id: category2.id, description: "This video has 10 tips on housecleaning for those who really dislike the task."})
video14 = Video.create!({ title: "DIY Home Decor", category_id: category2.id, description: "This video demonstrates how to spruce up your house with some simple DIY home decor tricks."})
video15 = Video.create!({ title: "Rope Decor", category_id: category2.id, description: "This video demonstrates how to use rope for various kinds of house decor."})
video16 = Video.create!({ title: "Working Safely", category_id: category2.id, description: "This video demonstrates how to prevent melanoma while working outside."})
video17 = Video.create!({ title: "Home Upgrades", category_id: category2.id, description: "In this video, the Property Brothers give you 10 easy tips for upgrading your home."})
video18 = Video.create!({ title: "House Monitoring", category_id: category2.id, description: "This tidbit of This Old House demonstrates how to monitor your own home with your smart phone."})
video19 = Video.create!({ title: "Pest Removal", category_id: category2.id, description: "This video demonstrates how to enage in techniques that will prevent and remove pests." })
video20 = Video.create!({ title: "Build Keyboard", category_id: category3.id, description: "This video demonstrates how to build a wooden keyboard." })
video21 = Video.create!({ title: "Straighten Guitar", category_id: category3.id, description: "This video demonstrates how to straighten a bent guitar neck." })
video22 = Video.create!({ title: "Paint Piano", category_id: category3.id, description: "This video demonstrates how to paint a piano like a professional." })
video23 = Video.create!({ title: "Fix Chip on Guitar", category_id: category3.id, description: "This video demonstrates how remove a chip from a finished guitar." })
video24 = Video.create!({ title: "Fix Guitar Neck", category_id: category3.id, description: "This video demonstrates how to fix a broken guitar neck on numerous different guitars." })
video25 = Video.create!({ title: "Guitar Numbering", category_id: category3.id, description: "This video demonstrates the concept of numbering regarding guitars: fingers, frets, and strings."})
video26 = Video.create!({ title: "Tennis Racket Guitar", category_id: category3.id, description: "This video demonstrates how to make a guitar from just a simple tennis racket."})
video27 = Video.create!({ title: "What is Jazz?", category_id: category3.id, description: "This video explains the rudimentary concepts of Jazz, and what characterizes the musical genre." })
video28 = Video.create!({ title: "Music Theory Basics", category_id: category3.id, description: "This video will teach you the basics concepts and terminology in Music Theory."})
video29 = Video.create!({ title: "Read Sheet Music", category_id: category3.id, description: "This animated video is narrated by Tim Hansen, who explains how to read sheet music." })
video30 = Video.create!({ title: "Fix Steering Wheel", category_id: category4.id, description: "This video demonstrates how to restore a worn out steering wheel." })
video31 = Video.create!({ title: "Remove Rust", category_id: category4.id, description: "This video demonstrates how to remove rust on your car without any welding." })
video32 = Video.create!({ title: "Car Repairs", category_id: category4.id, description: "This video demonstrates what things you should consider before performing any DIY car repairs." })
video33 = Video.create!({ title: "Car Hacks", category_id: category4.id, description: "This video will show you 5 simple life hacks for your car." })
video34 = Video.create!({ title: "Change Engine Oil", category_id: category4.id, description: "This video demonstrates how to change your own engine oil." })
video35 = Video.create!({ title: "Check Engine Oil", category_id: category4.id, description: "This video demonstrates how to check the level of your engine oil." })
video36 = Video.create!({ title: "Bike Mechanic Tips", category_id: category4.id, description: "This video gives you advice on how to be a better motorcycle mechanic." })
video37 = Video.create!({ title: "Balance Bike Tires", category_id: category4.id, description: "This video demonstrates how to balance motorcycle tires." })

video1.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/nachos.jpg"
video2.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/partyfood.jpg"
video3.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/dessert.jpg"
video4.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+9.29.59+AM.png"
video5.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/cupcakes.jpg"
video6.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+9.35.40+AM.png"
video7.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+9.39.00+AM.png"
video8.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+9.46.43+AM.png"
video9.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.22.24+AM.png"
video10.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video11.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/TileBacksplash.png"
video12.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/chores.jpg"
video13.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/House+Cleaning.png"
video14.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.00.26+AM.png"
video15.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/rope.jpg"
video16.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.17.03+AM.png"
video17.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.34.13+AM.png"
video18.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.37.05+AM.png"
video19.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/bob-vila-thumb.png"
video20.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/keyboard.png"
video21.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/guitar.jpg"
video22.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/piano.jpg"
video23.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.04.20+PM.png"
video24.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/guitarneck.jpg"
video25.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.49.04+AM.png"
video26.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+10.58.36+AM.png"
video27.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.07.03+AM.png"
video28.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.12.08+AM.png"
video29.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.19.54+AM.png"
video30.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/steeringwheel.jpg"
video31.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/rust.jpg"
video32.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-02+at+11.11.17+PM.png"
video33.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.27.33+AM.png"
video34.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.37.22+AM.png"
video35.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.42.06+AM.png"
video36.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.51.51+AM.png"
video37.thumbnail = "https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/Screen+Shot+2017-11-06+at+11.57.38+AM.png"

video1.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Yummy+Nachos+Recipe+-+3+Ways+-+Easy+DIY+Party+Food+Ideas+-+Tasty+Fun+Food+Ideas+by+So+Yummy.mp4")
video2.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Yummy+Food+Ideas+-+Learn+How+to+Cook+-+DIY+Party+Treats+-+Best+Dessert+%26+Savory+Recipes.mp4")
video3.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Yummy+Food+Ideas+-+Dessert+Treats+-+Easy+DIY+-+Ice+Cream%2C+Cakes%2C+Cupcakes+and+More+by+So+Yummy.mp4")
video4.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+To+Make+Vegan+Junk+Food.mp4")
video5.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Chocolate+Cakes+and+Cupcakes+Decorating+Techniques+-+Yummy+Dessert+Recipes+by+So+Yummy.mp4")
video6.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/2+Delicious+Vegan+Dinner+Recipes.mp4")
video7.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Quick+And+Easy+Vegan+Mac+%26+Cheese.mp4")
video8.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Make+Paleo+Mayonnaise+-+Beyond+Diet+Recipes.mp4")
video9.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+To+Meal+Prep+-+Ep.+1+-+CHICKEN+(7+Meals-%243.50+Each).mp4")
video10.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4")
video11.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Install+a+Glass+Tile+Backsplash+-+This+Old+House.mp4")
video12.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/6+Clever+Ways+To+Speed+Up+Your+Chores.mp4")
video13.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/10+Cleaning+Tips+for+People+who+Hate+Housework+-+Quick+Tips.mp4")
video14.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Simple+DIY+Home+Decor.mp4")
video15.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/40+Rope+Decor+Ideas+-+DIY+Home+Decor+-+Nautical+Rope+Decorations.mp4")
video16.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Help+Prevent+Melanoma+While+Working+Outside.mp4")
video17.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/10+Easy+Home+Upgrades+from+the+Property+Brothers.mp4")
video18.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Monitor+a+Home+with+a+Smart+Phone.mp4")
video19.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/bob-vila.mp4")
video20.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Wood+Keyboard+-+Building+It.mp4")
video21.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Straighten+a+Guitar+Neck+For+Dummies.mp4")
video22.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+To+Paint+A+Piano.mp4")
video23.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fixing+a+small+chip+in+a+guitar+finish.mp4")
video24.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Broken+Guitar+Neck+Repair.mp4")
video25.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Fingers%2C+Frets%2C+And+Strings+-+Beginner+Guitar+Lesson+%233.mp4")
video26.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/DIY+tennis+racket+electric+guitar.mp4")
video27.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Jazz+or+something.mp4")
video28.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/Basics+of+Music+Theory-++Part+I.mp4")
video29.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+read+music+-+Tim+Hansen.mp4")
video30.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+To+Restore+Your+Car's+Steering+Wheel+(Looks+Brand+New!).mp4")
video31.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Repair+Rust+on+Your+Car+Without+Welding+(No+Special+Tools+Needed).mp4")
video32.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/5+Things+to+Consider+BEFORE+DIY+Car+Repairs+-+Podcast+Episode+93.mp4")
video33.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/5+Awesome+Car+Life+Hacks.mp4")
video34.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+do+an+Easy+Oil+Change+-+Advance+Auto+Parts.mp4")
video35.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+to+Check+Oil+Level++-+Auto+Talk.mp4")
video36.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/3+Tips+For+Becoming+A+Better+Motorcycle+Mechanic+-+MC+GARAGE.mp4")
video37.video = URI.parse("https://s3.us-east-2.amazonaws.com/netfix-dev/videos/videos/000/000/How+To+Balance+a+Motorcycle+Tire+and+Wheel+from+SportbikeTrackGear.com.mp4")

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
video26.save!
video27.save!
video28.save!
video29.save!
video30.save!
video31.save!
video32.save!
video33.save!
video34.save!
video35.save!
video36.save!
video37.save!
