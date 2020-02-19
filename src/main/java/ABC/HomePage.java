package ABC;

import org.openqa.selenium.By;

public class HomePage extends Utils
{
    private By _registerLink = By.linkText("Register");
    private By _JewelryLink = By.xpath("/html/body/div[6]/div[2]/ul[1]/li[6]/a");
    public void ClickOnRegisterButton(){

        ClickOnElement(_registerLink);

    }
    public void ClickOnJewelryLink(){
        ClickOnElement(_JewelryLink);
    }
    public void UserIsOnHomePage(){
        driver.getCurrentUrl();

    }
    private By _computer = By.linkText("Computers");
    public void ClickOnComputerCatagory(){
        ClickOnElement(_computer);
    }
}
