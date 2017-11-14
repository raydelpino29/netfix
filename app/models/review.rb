class Review < ApplicationRecord
validates :body, :user_id, :video_id, presence: true

belongs_to :user,
  class_name: 'User',
  foreign_key: :user_id,
  primary_key: :id

belongs_to :video,
  class_name: 'Video',
  foreign_key: :video_id,
  primary_key: :id

end
