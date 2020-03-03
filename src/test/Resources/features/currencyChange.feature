Feature: user should be able to verify currency change successfully
  @currencyChange
  Scenario: user should be able to see currency change in products
    Given user is on home page
    When user clicks on currency option
    And user selects any currency
    Then user should be able to verify currency change successfully