
user1 = User.where(email: 'test@test.com').first_or_create(password: '12345678', password_confirmation: '12345678')
user2 = User.where( email: 'user2@test.com').first_or_create(password: '87654321', password_confirmation: '87654321')

 
trips1 = [
  {
    name: 'Grand Canyon',
    location: 'Arizona',
    from: 20220703,
    to: 20220705,
    travel_buddies: 'Code Empire Team',
    comments: 'Had a blast with the team after launching our app.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg'
  },
  {
    name: 'Petra',
    location: 'Jordan',
    from: 20220510,
    to: 20220517,
    travel_buddies: 'Friends from High School',
    comments: 'Instead of a reunion we decided to travel with our close group of friends',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2yzt4nT1SjYbV3itXx6HZHVmqpCrsRsBbQ&usqp=CAU'
  }
]
  
trips2 = [
  {
    name: 'Las Vegas Strip',
    location: 'Las Vegas, Nevada',
    from: 20220305,
    to: 20220310,
    travel_buddies: 'Spouse',
    comments: 'Quick getaway with my significant other',
    image: 'https://live.staticflickr.com/82/245235200_2c753b3671_b.jpg'
  }
]

trips1.each do |each_trip|
  user1.trips.create each_trip
  puts "creating trip #{each_trip}"
end

trips2.each do |each_trip|
  user2.trips.create each_trip
  puts "creating trip #{each_trip}"
end