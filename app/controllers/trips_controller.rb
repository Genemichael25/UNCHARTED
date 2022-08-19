class TripsController < ApplicationController
    
    def create
        trip = Trip.create(trip_params)
        if trip.valid?
            render json: trip
        else
            render json: trip.errors, status: 422
        end
    end

    private
    def trip_params
        params.require(:trip).permit(:name, :location, :from, :to, :travel_buddies, :comments, :image, :user_id)
    end

end
