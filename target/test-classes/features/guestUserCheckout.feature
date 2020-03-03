Feature: Guest user be able to checkout successfully
  @guestUser
  Scenario: Guest user can checkout successfully
    Given user is on home page
    When user select any product
    And user adds item to cart
    And user fills all necessary details
    Then user should be able to checkout successfully