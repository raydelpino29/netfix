class Like < ApplicationRecord
  validates :user_id, :video_id, :like_status, presence: true
  enum :like_status ["dislike", "like"]

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :video,
    class_name: 'Video',
    foreign_key: :video_id,
    primary_key: :id

    def self.find_by_credentials(user_id, video_id)
      like = Like.find_by(user_id: user_id, video_id: video_id)
      return like
    end

end
