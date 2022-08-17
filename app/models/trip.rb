class Trip < ApplicationRecord
    validates :name, :location, :from, :to, :travel_buddies, :image, :comments, presence: true
end





