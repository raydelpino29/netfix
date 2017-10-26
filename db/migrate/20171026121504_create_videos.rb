class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :category_id, null: false
      t.text :description, null: false
    end
  end
end
