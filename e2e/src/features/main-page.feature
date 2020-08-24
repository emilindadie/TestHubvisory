Feature: Main screen
  Display Questions

  Scenario: Main Page
    Given I'm a user of the app
    When I arrive on the main page
    Then I'm prompted with my first question of whether an actor is part of a movie or not