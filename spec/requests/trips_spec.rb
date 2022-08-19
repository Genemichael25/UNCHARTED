require 'rails_helper'

RSpec.describe "Trips", type: :request do
  describe "GET /index" do
    it "gets a list of trips" do
      
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
      
      user.trips.create(
        name: 'Wyatt John',
        location: 'Paris, France',
        from: 20220911,
        to: 20220915,
        travel_buddies: 'Josh, Apple, and Peach',
        comments: 'Loved the Effiel Tower',
        image: 'https://photos.zillowstatic.com/fp/7f7209dfbb519e5aa13446bbbd60c43d-cc_ft_576.webp'
        
      )

      get '/trips'

      trip = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(trip.length).to eq 1
      
    end
  end
end
