class LikesController < ApplicationController

  def index
    render :index
  end

  def like
    @like = Like.new(like_params)
    @like.save
    render :show
  end

  def remove_like
    @like = Like.find_by_credentials(params[:user_id], params[:video_id])
    @like.destroy
    render :show
  end

  def dislike
    @dislike = Like.new(like_params)
    @dislike.save
    render :show
  end

  def remove_dislike
    @dislike = Like.find_by_credentials(params[:user_id], params[:video_id])
    @dislike.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :video_id, :like_status)
  end

end
