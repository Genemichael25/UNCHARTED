class TripsController < ApplicationController
    def update
        trip = Trip.find(params[:id])
        trip.update(trip_params)
        render json: trip
    end
    private
    def trip_params
        params.require(:trip).permit(:name, :location, :from, :to, :travel_buddies, :comments, :image, :user_id)
    end
end
