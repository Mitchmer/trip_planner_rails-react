class Api::TripsController < ApplicationController
  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors }, status: :unprocessable_entity 
    end
  end

  private

  def trip_params
    params.require(:trip).permit(:name)
  end
  
end
