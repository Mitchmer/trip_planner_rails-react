class Api::LocationsController < ApplicationController
  before_action :set_trip, only: [:create, :destroy]
  before_action :set_location, only: [:destroy]

  def create
    location = @trip.locations.new(location_params)
    
    if location.save
      render json: location
    else
      render json: { errors: location.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    location = Locations.find(params[:id])
  end

  private

  def location_params
    params.require(:location).permit(:name)
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def set_location
    @location = Location.find(params[:id])
  end
end
