class Api::VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def search
    @videos = Video.where("lower(title) LIKE ?", "%#{params[query].downcase}%")
    render :index
  end

end
