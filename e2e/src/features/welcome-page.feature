Feature: Welcome screen
  Display Welcome screen

  Scenario: Home Page
    Given I'm a user of the app
    When I arrive of the app
    Then I'm greeted by a welcome screen


  Scenario: Start quiz
    Given I'm a user of the app
    When I click on Start
    Then the quizz starts