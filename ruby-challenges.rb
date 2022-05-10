# # ASSESSMENT 5: Ruby Coding Practical Questions
# # MINASWAN

# # --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_letter(array, single_letter)
    array.select { |word| word.include? single_letter }
end

p contains_letter(beverages_array, letter_o)
p contains_letter(beverages_array, letter_t)
# # Output:
# # ["coffee", "soda water"]
# # ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_of (nums_array)
    nums_array.inject(:+)
end

p sum_of nums_array1
p sum_of nums_array2
# Output:
# 76
# 100

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
      def initialize(model, wheel, current_speed)
          @model = model
          @wheel = 2
          @current_speed = current_speed
      end
      def my_bike (model, wheel, current_speed)
        p "the #{model} bike has #{wheel} wheels and is going #{current_speed} mph"
      end
      def pedal_faster(speed)
          @current_speed += speed
            end
      def brake(speed)
          @current_speed -= speed
          if current_speed >= 0
             current_speed
          else
              0
          end
      end
  end
   bike_info = Bike.new('mongoose', 2, 0)
  p bike_info.my_bike('mongoose', 2, 0)
  p bike_info.pedal_faster(10)
  p bike_info.pedal_faster(18)
  p bike_info.brake(5)
  p bike_info.brake(25)

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# OUTPUT:
# 10
# 28
# 23
# 0