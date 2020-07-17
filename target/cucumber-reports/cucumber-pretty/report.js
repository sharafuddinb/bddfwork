$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TestEnv.feature");
formatter.feature({
  "line": 1,
  "name": "Test Environment",
  "description": "",
  "id": "test-environment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7727671000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Register Account for new User",
  "description": "",
  "id": "test-environment;register-account-for-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@registerTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on Register",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fills Register form with below information",
  "rows": [
    {
      "comments": [
        {
          "line": 13,
          "value": "# we will use pip | |"
        }
      ],
      "cells": [
        "firstName",
        "LastName",
        "E-mail",
        "Telephone",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "Zuabir",
        "Ahmadi",
        "zubair221@test.com",
        "5714254582",
        "zubairahmadi"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select \u0027yes\u0027 for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click privacy and policy button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should see message  \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefinition.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 2056400700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 589949700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_on_Register()"
});
formatter.result({
  "duration": 1506529300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_fills_Register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 965164200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 13
    }
  ],
  "location": "RegisterStepDefinition.user_select_yes_for_Subscribe(String)"
});
formatter.result({
  "duration": 131224900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_privacy_and_policy_button()"
});
formatter.result({
  "duration": 621358700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_Continue_button()"
});
formatter.result({
  "duration": 421529800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 26
    }
  ],
  "location": "RegisterStepDefinition.user_should_see_message_Your_Account_Has_Been_Created(String)"
});
formatter.result({
  "duration": 35056034300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-35QE28J\u0027, ip: \u0027100.77.48.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SCHOOL~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58167}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 91296d3a789f98a7720180e7002e7803\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat utilities.DriverUtility.getText(DriverUtility.java:147)\r\n\tat pageObjects.RegisterPageObj.getSuccessfullAcctCreationMessage(RegisterPageObj.java:95)\r\n\tat stepDefinitions.RegisterStepDefinition.user_should_see_message_Your_Account_Has_Been_Created(RegisterStepDefinition.java:80)\r\n\tat ✽.Then User should see message  \u0027Your Account Has Been Created!\u0027(Features/TestEnv.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 854047000,
  "status": "passed"
});
});