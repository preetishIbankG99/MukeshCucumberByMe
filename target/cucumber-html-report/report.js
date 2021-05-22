$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test OrangeHRM smoke scenario",
  "description": "",
  "id": "test-orangehrm-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Admin123",
        "admin123"
      ],
      "line": 10,
      "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Admin456",
        "admin456"
      ],
      "line": 11,
      "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "Admin789",
        "admin789"
      ],
      "line": 12,
      "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"Admin123\" and valid \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 56720359758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 15
    },
    {
      "val": "admin123",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 183133707,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.browser_should_be_closed()"
});
formatter.result({
  "duration": 5602641623,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"Admin456\" and valid \"admin456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 34487595543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin456",
      "offset": 15
    },
    {
      "val": "admin456",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 169540184,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.browser_should_be_closed()"
});
formatter.result({
  "duration": 2304000341,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-orangehrm-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"Admin789\" and valid \"admin789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 40393369767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin789",
      "offset": 15
    },
    {
      "val": "admin789",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 181068071,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.browser_should_be_closed()"
});
formatter.result({
  "duration": 5911736986,
  "status": "passed"
});
});