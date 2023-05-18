Feature: Mobile view workflow

Background: set viewmode
  Given Load payload version "test-url-two"

Scenario: mobile page
  When Set view mode to mobile

Scenario: validate heading
  Then Validate the heading