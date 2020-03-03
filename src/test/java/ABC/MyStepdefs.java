package ABC;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegistrationResultPage registrationResultPage = new RegistrationResultPage();
    JewelryPage jewelryPage = new JewelryPage();
    ProductComparison productComparison = new ProductComparison();
    EmailAFriendPage emailAFriendPage = new EmailAFriendPage();
    Catagories catagories = new Catagories();
    ProductDetailsPage productDetailsPage = new ProductDetailsPage();
    GuestCheckout guestCheckout = new GuestCheckout();
    ShippingAddress shippingAddress = new ShippingAddress();
    PaymentMethod paymentMethod = new PaymentMethod();
    NewsPage newsPage = new NewsPage();
    AddToCartButton addToCartButton = new AddToCartButton();
    ChangeCurrency changeCurrency = new ChangeCurrency();
    CheckoutResult checkoutResult = new CheckoutResult();
    Computers computers = new Computers();

    @Given("^user is on register page$")
    public void userIsOnRegisterPage() {
        homePage.ClickOnRegisterButton();
        registrationPage.verifyUserIsOnRegisterPage();
    }

    @When("^user enters all register page$")
    public void userEntersAllRegisterPage() {
        registrationPage.verifyUserIsOnRegisterPage();
        registrationPage.userEntersRegistrationDetails();
    }

    @And("^user clicks on register button$")
    public void userClicksOnRegisterButton() {
        homePage.ClickOnRegisterButton();
    }

    @Then("^user should be able to register successfully$")

    public void userShouldBeAbleToRegisterSuccessfully() {
        registrationResultPage.VerifyUserRegistrationSuccessMessage();

    }

    @Given("^user is on home page$")
    public void userIsOnHomePage() {
        homePage.UserIsOnHomePage();
    }

    @When("^user clicks on jewelery$")
    public void userClicksOnJewelery() {
        homePage.ClickOnJewelryLink();
    }

    @And("^user compares two products$")
    public void userComparesTwoProducts() {
        jewelryPage.ChooseProductsToCompare();
    }

    @Then("^user should be able to compare two products successfully$")
    public void userShouldBeAbleToCompareTwoProductsSuccessfully() {
        productComparison.VerifyUserIsOnComparisionPage();
    }


    @And("^user enters email and password$")
    public void userEntersEmailAndPassword() {
        registrationPage.userEntersRegistrationDetails();

    }

    @And("^click on computers$")
    public void clickOnComputers() {
        homePage.ClickOnComputerCatagory();
        catagories.verifyUserOnComputerCatagoriesPage();
        computers.UserClickOnNotebook();
        catagories.userClickOnApplemac();
    }

    @And("^click on email a friend button$")
    public void clickOnEmailAFriendButton() {

    }

    @And("^enter friend's email and password$")
    public void enterFriendSEmailAndPassword() {
    }

    @Then("^user is able to refer a product successfully$")
    public void userIsAbleToReferAProductSuccessfully() {
        catagories.userReferToFriend();
    }

    @When("^user clicks on computers$")
    public void userClicksOnComputers() {
        homePage.ClickOnComputerCatagory();
    }

    @And("^user select product to refer a friend$")
    public void userSelectProductToReferAFriend() {
        productDetailsPage.userClickOnNoteBook();
        productDetailsPage.userClickOnAppleMac();

    }

    @Then("^user should not be able to refer a product to friend$")
    public void userShouldNotBeAbleToReferAProductToFriend() {
        productDetailsPage.UserReferToFriend();
    }

    @And("^user clicks on price high to low$")
    public void userClicksOnPriceHighToLow() {
        catagories.verifyUserOnComputerCatagoriesPage();
        computers.UserClickOnNotebook();

    }

    @Then("^user should be able to see price high to low successfully$")
    public void userShouldBeAbleToSeePriceHighToLowSuccessfully() {
        computers.UserSelectFRomPositionPriceHighToLow();
        computers.verifyUserShouldBeAbleToSeePriceHighToLow();
    }

    @When("^user select any product$")
    public void userSelectAnyProduct() {
        homePage.ClickOnJewelryLink();
        jewelryPage.VerifyUserIsOnJeweleryPage();

    }

    @And("^user adds item to cart$")
    public void userAddsItemToCart() {
        jewelryPage.AddToCartProduct();

    }

    @And("^user fills all necessary details$")
    public void userFillsAllNecessaryDetails() {
        guestCheckout.checkoutAsGuest();
        shippingAddress.userShippingAddress();
        paymentMethod.userChoosePaymentMethod();
    }

    @Then("^user should be able to checkout successfully$")
    public void userShouldBeAbleToCheckoutSuccessfully() {
        checkoutResult.verifyCheckoutSuccessMessage();
    }

    @When("^user clicks on news page$")
    public void userClicksOnNewsPage() {
        homePage.UserIsOnHomePage();
        newsPage.userClickOnDetails();
    }

    @And("^user adds new comment$")
    public void userAddsNewComment() {
        newsPage.verifysuccessmessageofcomment();
    }

    @Then("^user should be able to see new comment added in the list successfully$")
    public void userShouldBeAbleToSeeNewCommentAddedInTheListSuccessfully() {
        newsPage.verifysuccessmessageofcomment();
    }

    @When("^user scrolls to all featured products$")
    public void userScrollsToAllFeaturedProducts() {

    }

    @And("^checks all featured products$")
    public void checksAllFeaturedProducts() {
    }

    @Then("^user should be able to verify add to cart button is present in all featured products$")
    public void userShouldBeAbleToVerifyAddToCartButtonIsPresentInAllFeaturedProducts() {
        homePage.UserIsOnHomePage();
        homePage.checkAddtoCartButtonOnAllProducts();
    }

    @When("^user clicks on currency option$")
    public void userClicksOnCurrencyOption() {
        homePage.UserIsOnHomePage();
    }

    @And("^user selects any currency$")
    public void userSelectsAnyCurrency() {
        changeCurrency.userShouldBeAbleViewCurrencyChange();
    }

    @Then("^user should be able to verify currency change successfully$")
    public void userShouldBeAbleToVerifyCurrencyChangeSuccessfully() {
        changeCurrency.verifyCurrencyChangeFromUsDollarToEuro();
    }
}