Feature: Game over screen
  Display Game over page

  Scenario: Game over Page
    Given I'm a user of the app
    When I arrive on the game over page
    Then I'm greeted by a game over screen