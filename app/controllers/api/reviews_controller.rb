class ReviewsController < ApplicationController

  def index
    render :index
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit
    
  end

  def update

  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:body, :user_id, :video_id)
  end

end
