class Api::LikesController < ApplicationController

  def index
    render :index
  end

  def like
    @like = Like.new(like_params)
    @like.save
    render :show
  end

  def remove_like
    @like = Like.find(params[:id])
    @like.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :video_id, :like_status)
  end

end
