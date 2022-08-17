require 'rails_helper'


RSpec.describe Trip, type: :model do
  it 'is not valid without name' do 
    scully = Trip.create location: 'sandeigo', from: 20220112, to: 20220313, travel_buddies: 'leo, steven', image: 'image of a waterfall', comments: 'nice hike to the waterfall'
    expect(scully.errors[:name]).to_not be_empty
  end


  it 'is not valid without a location' do 
    scully = Trip.create name: 'mike', from: 20220112, to: 20220313, travel_buddies: 'leo, steven', image: 'image of a waterfall', comments: 'nice hike to the waterfall'
    expect(scully.errors[:location]).to_not be_empty
  end


  it 'is not valid without from' do 
    scully = Trip.create location: 'sandeigo', to: 20220313, travel_buddies: 'leo, steven', image: 'image of a waterfall', comments: 'nice hike to the waterfall'
    expect(scully.errors[:from]).to_not be_empty
  end


  it 'is not valid without to' do 
    scully = Trip.create location: 'sandeigo', from: 20220112, travel_buddies: 'leo, steven', image: 'image of a waterfall', comments: 'nice hike to the waterfall'
    expect(scully.errors[:to]).to_not be_empty
  end


  it 'is not valid without travel_buddies' do 
    scully = Trip.create location: 'sandeigo', from: 20220112, to: 20220313, image: 'image of a waterfall', comments: 'nice hike to the waterfall'
    expect(scully.errors[:travel_buddies]).to_not be_empty
  end


  it 'is not valid without image' do 
    scully = Trip.create location: 'sandeigo', from: 20220112, to: 20220313, travel_buddies: 'leo, steven', comments: 'nice hike to the waterfall'
    expect(scully.errors[:image]).to_not be_empty
  end 

  
  it 'is not valid without comments' do 
    scully = Trip.create location: 'sandeigo', from: 20220112, to: 20220313, travel_buddies: 'leo, steven', image: 'waterfall'
    expect(scully.errors[:comments]).to_not be_empty
  end
end
 
