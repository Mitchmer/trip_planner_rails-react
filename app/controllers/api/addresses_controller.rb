class Api::AddressesController < ApplicationController
  def create
    address = Addresses.new(address_params)
    if address.save
      render json: address
    else
      render json: { errors: address.errors }, status: :unprocessable_entity 
    end
  end

  private

  def address_params
    params.require(:address).permit(:lat, :lon)
  end
end
