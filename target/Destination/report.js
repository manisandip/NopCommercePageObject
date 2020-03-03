$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/features/addToCartButton.feature");
formatter.feature({
  "line": 1,
  "name": "verify add to cart button is present in all featured products",
  "description": "",
  "id": "verify-add-to-cart-button-is-present-in-all-featured-products",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12306826301,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user can see add to cart button in featured products",
  "description": "",
  "id": "verify-add-to-cart-button-is-present-in-all-featured-products;user-can-see-add-to-cart-button-in-featured-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@addtocart"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user scrolls to all featured products",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "checks all featured products",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to verify add to cart button is present in all featured products",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 122475199,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollsToAllFeaturedProducts()"
});
formatter.result({
  "duration": 22399,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.checksAllFeaturedProducts()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToVerifyAddToCartButtonIsPresentInAllFeaturedProducts()"
});
formatter.result({
  "duration": 52956999,
  "error_message": "java.lang.AssertionError: Some of items does not have ADD TO CART button expected [4] but found [1]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat ABC.HomePage.checkAddtoCartButtonOnAllProducts(HomePage.java:53)\r\n\tat ABC.MyStepdefs.userShouldBeAbleToVerifyAddToCartButtonIsPresentInAllFeaturedProducts(MyStepdefs.java:183)\r\n\tat ✽.Then user should be able to verify add to cart button is present in all featured products(src/test/Resources/features/addToCartButton.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1020276400,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/compare.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to compare two products successfully",
  "description": "",
  "id": "user-should-be-able-to-compare-two-products-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10950716400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user compares two different products",
  "description": "",
  "id": "user-should-be-able-to-compare-two-products-successfully;user-compares-two-different-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@compare"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on jewelery",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user compares two products",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to compare two products successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 10198799,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnJewelery()"
});
formatter.result({
  "duration": 1468707000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userComparesTwoProducts()"
});
formatter.result({
  "duration": 12789351301,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToCompareTwoProductsSuccessfully()"
});
formatter.result({
  "duration": 39380401,
  "error_message": "org.junit.ComparisonFailure: page not found expected:\u003c[c]ompare products\u003e but was:\u003c[C]ompare products\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat ABC.Utils.assertTextMessage(Utils.java:79)\r\n\tat ABC.ProductComparison.VerifyUserIsOnComparisionPage(ProductComparison.java:9)\r\n\tat ABC.MyStepdefs.userShouldBeAbleToCompareTwoProductsSuccessfully(MyStepdefs.java:68)\r\n\tat ✽.Then user should be able to compare two products successfully(src/test/Resources/features/compare.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1149974000,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/currencyChange.feature");
formatter.feature({
  "line": 1,
  "name": "user should be able to verify currency change successfully",
  "description": "",
  "id": "user-should-be-able-to-verify-currency-change-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10710395600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user should be able to see currency change in products",
  "description": "",
  "id": "user-should-be-able-to-verify-currency-change-successfully;user-should-be-able-to-see-currency-change-in-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@currencyChange"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on currency option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects any currency",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to verify currency change successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 6649701,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnCurrencyOption()"
});
formatter.result({
  "duration": 6270800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsAnyCurrency()"
});
formatter.result({
  "duration": 813691400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToVerifyCurrencyChangeSuccessfully()"
});
formatter.result({
  "duration": 161659700,
  "status": "passed"
});
formatter.after({
  "duration": 71873101,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/guestUserCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Guest user be able to checkout successfully",
  "description": "",
  "id": "guest-user-be-able-to-checkout-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11159841001,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Guest user can checkout successfully",
  "description": "",
  "id": "guest-user-be-able-to-checkout-successfully;guest-user-can-checkout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@guestUser"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user select any product",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user fills all necessary details",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to checkout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 12258800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectAnyProduct()"
});
formatter.result({
  "duration": 1366847901,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userAddsItemToCart()"
});
formatter.result({
  "duration": 19769980200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userFillsAllNecessaryDetails()"
});
formatter.result({
  "duration": 16229142500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToCheckoutSuccessfully()"
});
formatter.result({
  "duration": 55072792301,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//strong[contains(text(),\u0027processed\u0027)]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANSH-HP\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Ansh\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57654}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dfe13527be24b674070fbccb6b2240ed\n*** Element info: {Using\u003dxpath, value\u003d//strong[contains(text(),\u0027processed\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ABC.Utils.clickOnElement(Utils.java:20)\r\n\tat ABC.CheckoutResult.verifyCheckoutSuccessMessage(CheckoutResult.java:18)\r\n\tat ABC.MyStepdefs.userShouldBeAbleToCheckoutSuccessfully(MyStepdefs.java:152)\r\n\tat ✽.Then user should be able to checkout successfully(src/test/Resources/features/guestUserCheckout.feature:8)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 754783100,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/newComment.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to add new comment on nopcommerce website",
  "description": "",
  "id": "user-should-be-able-to-add-new-comment-on-nopcommerce-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10682377800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user can add new comment on website successfully",
  "description": "",
  "id": "user-should-be-able-to-add-new-comment-on-nopcommerce-website;user-can-add-new-comment-on-website-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@newComment"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on news page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds new comment",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to see new comment added in the list successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 7400401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnNewsPage()"
});
formatter.result({
  "duration": 7628439700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userAddsNewComment()"
});
formatter.result({
  "duration": 35620601,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToSeeNewCommentAddedInTheListSuccessfully()"
});
formatter.result({
  "duration": 18634700,
  "status": "passed"
});
formatter.after({
  "duration": 75053301,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/registeredUserReferaFriend.feature");
formatter.feature({
  "line": 1,
  "name": "Registered user refer a product to a frien successfully",
  "description": "",
  "id": "registered-user-refer-a-product-to-a-frien-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12179020500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Registered user refer product to friend",
  "description": "",
  "id": "registered-user-refer-a-product-to-a-frien-successfully;registered-user-refer-product-to-friend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@refer"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters email and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on computers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on email a friend button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter friend\u0027s email and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is able to refer a product successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 5836000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 1286208200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersEmailAndPassword()"
});
formatter.result({
  "duration": 4650975900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnComputers()"
});
formatter.result({
  "duration": 6345074801,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnEmailAFriendButton()"
});
formatter.result({
  "duration": 25101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.enterFriendSEmailAndPassword()"
});
formatter.result({
  "duration": 20701,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsAbleToReferAProductSuccessfully()"
});
formatter.result({
  "duration": 50155401300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\"friend-email\"]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANSH-HP\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Ansh\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57854}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9770204c4af923aa4d94dd38c0236861\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\"friend-email\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ABC.Utils.EnterText(Utils.java:53)\r\n\tat ABC.Catagories.userReferToFriend(Catagories.java:41)\r\n\tat ABC.MyStepdefs.userIsAbleToReferAProductSuccessfully(MyStepdefs.java:97)\r\n\tat ✽.Then user is able to refer a product successfully(src/test/Resources/features/registeredUserReferaFriend.feature:10)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 5116566501,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/registration.feature");
formatter.feature({
  "line": 1,
  "name": "user should be able to register successfully ,",
  "description": "so that he can use all user features from our website",
  "id": "user-should-be-able-to-register-successfully-,",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11096556200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should be able to register",
  "description": "",
  "id": "user-should-be-able-to-register-successfully-,;user-should-be-able-to-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters all register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 1297740000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersAllRegisterPage()"
});
formatter.result({
  "duration": 3696442099,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 568099100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 50033194800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".result\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANSH-HP\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Ansh\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57984}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fa2ef35d56e9b44938709ec8f2ede15f\n*** Element info: {Using\u003dclass name, value\u003dresult}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ABC.Utils.getTextFromElement(Utils.java:27)\r\n\tat ABC.Utils.assertTextMessage(Utils.java:78)\r\n\tat ABC.RegistrationResultPage.VerifyUserRegistrationSuccessMessage(RegistrationResultPage.java:11)\r\n\tat ABC.MyStepdefs.userShouldBeAbleToRegisterSuccessfully(MyStepdefs.java:47)\r\n\tat ✽.Then user should be able to register successfully(src/test/Resources/features/registration.feature:8)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 742671399,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/sortProductHighToLow.feature");
formatter.feature({
  "line": 1,
  "name": "verify user can see price high to low in the products successfully",
  "description": "",
  "id": "verify-user-can-see-price-high-to-low-in-the-products-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10694882399,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user can see price high to low",
  "description": "",
  "id": "verify-user-can-see-price-high-to-low-in-the-products-successfully;user-can-see-price-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@highToLow"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on computers",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on price high to low",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to see price high to low successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 6001700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnComputers()"
});
formatter.result({
  "duration": 1268111399,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPriceHighToLow()"
});
formatter.result({
  "duration": 3364685501,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToSeePriceHighToLowSuccessfully()"
});
formatter.result({
  "duration": 1528092800,
  "status": "passed"
});
formatter.after({
  "duration": 69257500,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/unregisteredUserReferaFriend.feature");
formatter.feature({
  "line": 1,
  "name": "unregistered friend should not be able to refer a product to friend",
  "description": "",
  "id": "unregistered-friend-should-not-be-able-to-refer-a-product-to-friend",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10914980900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "unregistered user can\u0027t refer product to friend",
  "description": "",
  "id": "unregistered-friend-should-not-be-able-to-refer-a-product-to-friend;unregistered-user-can\u0027t-refer-product-to-friend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@can\u0027tRefer"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on computers",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select product to refer a friend",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should not be able to refer a product to friend",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 5872401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnComputers()"
});
formatter.result({
  "duration": 990751700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectProductToReferAFriend()"
});
formatter.result({
  "duration": 4477449901,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToReferAProductToFriend()"
});
formatter.result({
  "duration": 50133588801,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027friend-email\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANSH-HP\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Ansh\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58128}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 26777f1bea83b411713ec5ccd6969f43\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027friend-email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ABC.Utils.EnterText(Utils.java:53)\r\n\tat ABC.ProductDetailsPage.UserReferToFriend(ProductDetailsPage.java:41)\r\n\tat ABC.MyStepdefs.userShouldNotBeAbleToReferAProductToFriend(MyStepdefs.java:114)\r\n\tat ✽.Then user should not be able to refer a product to friend(src/test/Resources/features/unregisteredUserReferaFriend.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!!!!!!!!!......Scenario Failed .....!!!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 5118686500,
  "status": "passed"
});
});