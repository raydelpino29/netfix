class MyListsController < ApplicationController

  def index
    render :index
  end

  def create
    @my_list = MyList.new(my_list_params)
    if @my_list.save
      render :show
    else
      render json: @my_list.errors.full_messages, status: 422
    end
  end

  def destroy
    @my_list = MyList.find(params[:id])
    @my_list.destroy
    render :show
  end

  private

  def my_list_params
    params.require(:my_list).permit(:user_id, :video_id)
  end

end
