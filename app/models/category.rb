class Category < ApplicationRecord
  validates :name, :description, presence: true

  has_many :videos,
    class_name: 'Video',
    foreign_key: :category_id,
    primary_key: :id

end
