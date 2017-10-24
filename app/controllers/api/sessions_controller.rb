class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :show
    else
      render json: ["Invalid Username/Password"], status: 401
  end

  def destroy
    @current_user = current_user
    if @current_user
      logout!
      render json: {}
    else
      render json: ["No User is Signed In"], status: 404
    end
  end

end
