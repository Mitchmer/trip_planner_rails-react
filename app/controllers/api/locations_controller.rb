class Api::LocationsController < ApplicationController
  before_action :set_trip 

  def create
    location = @trip.locations.new(location_params)
    binding.pry
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

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end
end
