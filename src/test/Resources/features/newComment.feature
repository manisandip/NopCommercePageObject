Feature: User should be able to add new comment on nopcommerce website
  @newComment
  Scenario: user can add new comment on website successfully
    Given user is on home page
    When user clicks on news page
    And user adds new comment
    Then user should be able to see new comment added in the list successfully