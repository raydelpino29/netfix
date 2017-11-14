class Video < ApplicationRecord
validates :title, :desription, :category_id, null: false
has_attached_file :video, default_url: "placeholder.mp4"
validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

has_attached_file :thumbnail, default_url: "placeholder-thumb.png"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

belongs_to :category,
  class_name: 'Category',
  foreign_key: :category_id,
  primary_key: :id

has_many :likes,
  class_name: 'Like',
  foreign_key: :video_id,
  primary_key: :id

has_many :reviews,
  class_name: 'Review',
  foreign_key: :video_id,
  primary_key: :id

end
