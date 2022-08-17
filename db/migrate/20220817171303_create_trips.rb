class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.date :from
      t.date :to
      t.string :travel_buddies
      t.text :comments
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
