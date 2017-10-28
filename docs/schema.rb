create_table "users" do |t|
  t.string "username", null: false
  t.string "password_digest", null: false
  t.string "session_token", null: false
  t.timestamps
end

create_table "videos" do |t|
  t.string "title", null: false
  t.integer "category_id", null: false
  t.text "description", null: false
  t.timestamps
end

create_table "reviews" do |t|
  t.string "title", null: false
  t.text "body", null: false
  t.integer "rating"
  t.integer "user_id", null: false
  t.integer "video_id", null: false
  t.timestamps
end

create_table "categories" do |t|
  t.string "name", null: false
  t.text "description", null: false
  t.timestamps
end

create_table "likes" do |t|
  t.integer "user_id", null: false
  t.integer "video_id", null: false
  t.integer "like_status"
  t.timestamps
end

create_table "my_list" do |t|
  t.string "user_id", null: false
  t.text "video_id", null: false
  t.timestamps
end
