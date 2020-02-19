package ABC;


import org.testng.annotations.Test;

public class TestSuit extends BaseTest {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegistrationResultPage registrationResultPage = new RegistrationResultPage();
    Computers computers = new Computers();
  //  Notebooks notebooks = new Notebooks();
    JewelryPage jewelryPage = new JewelryPage();
    ProductComparison productComparison = new ProductComparison();
    EmailAFriendPage emailAFriendPage = new EmailAFriendPage();
    Catagories catagories = new Catagories();
    ProductDetailsPage productDetailsPage = new ProductDetailsPage();

    @Test
    public void UserShouldAbleToRegisterSuccessfully(){
        //click on register button
        homePage.ClickOnRegisterButton();
        //fill up registration details
        registrationPage.verifyUserIsOnRegisterPage();

        registrationPage.userEntersRegistrationDetails();
        //verify registration success message
        registrationResultPage.VerifyUserRegistrationSuccessMessage();
    }
    @Test
    public void UserShouldBeAbleToCompareTwoDifferentProductsSuccessfully(){
        //User click on jewelry
       homePage.ClickOnJewelryLink();
       //verify user is on jewelry page
       jewelryPage.VerifyUserIsOnJeweleryPage();
       //user choose two products to compare
       jewelryPage.ChooseProductsToCompare();
       //verify user is on comparision page
       productComparison.VerifyUserIsOnComparisionPage();
    }
    @Test
    public void RegisteredUserShouldBeAbleToReferAFriendSuccessfully(){
        //click on register button
        homePage.ClickOnRegisterButton();
        //verify user is on registration page
        registrationPage.verifyUserIsOnRegisterPage();
        //Enter registration details
        registrationPage.userEntersRegistrationDetails();
        //verify user is registered successfully
        registrationResultPage.VerifyUserRegistrationSuccessMessage();
        //click on computer category
        homePage.ClickOnComputerCatagory();
        //verify user is on computer page
        catagories.verifyUserOnComputerCatagoriesPage();
        //user click on notebook
        catagories.userClickOnNoteBook();
        //user click on Applemac
        catagories.userClickOnApplemac();
        //user refer  friend
        catagories.userReferToFriend();


    }

    @Test
    public void nonRegisterUserShouldNotBeAbleToReferAProductToAFriend(){
        //click on computer category
        homePage.ClickOnComputerCatagory();
        //verify user is on computer category page
        productDetailsPage.VerifyUserIsOnComputerCatagoryPage();
        //click on notebook
        productDetailsPage.userClickOnNoteBook();
        //click on Applemac
        productDetailsPage.userClickOnAppleMac();
        //Refer a friend
        productDetailsPage.UserReferToFriend();

    }
    @Test
    public void UserShouldBeAbleToSortProductHighToLowByPrice(){
        //click on computer category
        homePage.ClickOnComputerCatagory();
        //click on notebook
        computers.UserClickOnNotebook();
        //select position price High to low from dropdown
        computers.UserSelectFRomPositionPriceHighToLow();

    }
}
