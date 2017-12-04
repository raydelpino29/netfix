class MyList < ApplicationRecord
validates :user_id, :video_id, presence: true
validates :user_id, uniqueness: { scope: :video_id }

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
end
