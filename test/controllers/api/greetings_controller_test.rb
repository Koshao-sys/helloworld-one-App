require "test_helper"

class Api::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get hello" do
    get api_greetings_hello_url
    assert_response :success
  end
end
