class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.integer :like_status, null: false
      t.timestamps
    end
  end
end
