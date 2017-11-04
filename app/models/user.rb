class User < ApplicationRecord
validates :email, :session_token, presence: true, uniqueness: true
validates :password_digest, presence: true
validates :password, length: { minimum: 6, allow_nil: true }
before_validation :ensure_session_token

attr_reader :password

  has_many :likes,
    class_name: 'Like',
    foreign_key: :user_id,
    primary_key: :id

  has_many :my_list_videos,
    class_name: 'MyList',
    foreign_key: :user_id,
    primary_key: :id

  has_many :reviews,
    class_name: 'Review',
    foreign_key: :user_id,
    primary_key: :id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
