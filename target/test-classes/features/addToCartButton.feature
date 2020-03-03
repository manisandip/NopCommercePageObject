Feature: verify add to cart button is present in all featured products
  @addtocart
  Scenario: user can see add to cart button in featured products
    Given user is on home page
    When user scrolls to all featured products
    And checks all featured products
    Then user should be able to verify add to cart button is present in all featured products