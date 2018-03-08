class Api::LocationsController < ApplicationController

  def create
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: { errors: location.errors }, status: :unprocessable_entity 
    end
  end

  private

  def location_params
    params.require(:location).permit(:name)
  end
end
