class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def search
    @videos = Video.where("category_id = #{params[:id]}").where("lower(title) LIKE ?", "%#{params[:query].downcase}%")
    render :search
  end

end
