Feature: Registered user refer a product to a frien successfully
  @refer
  Scenario: Registered user refer product to friend
    Given user is on home page
    When user clicks on register button
    And user enters email and password
    And click on computers
    And click on email a friend button
    And enter friend's email and password
    Then user is able to refer a product successfully