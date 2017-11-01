class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
  end
end
