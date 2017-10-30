class CreateMyList < ActiveRecord::Migration[5.1]
  def change
    create_table :my_lists do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
    end
  end
end
