package ABC;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class HomePage extends Utils
{
    private By _registerLink = By.linkText("Register");
    private By _JewelryLink = By.xpath("/html/body/div[6]/div[2]/ul[1]/li[6]/a");

    public void ClickOnRegisterButton(){
        clickOnComputers(_registerLink);

    }
    public void ClickOnJewelryLink(){
        clickOnElement(_JewelryLink);
    }
    public void UserIsOnHomePage(){
        driver.getCurrentUrl();

    }
    private By _computer = By.linkText("Computers");
    public void ClickOnComputerCatagory(){
        clickOnElement(_computer);
    }
    public void verifyAddToCompareButtonForEachProduct(){
        List<WebElement>productlist = driver.findElements(By.cssSelector(("")));
        for (WebElement we: productlist){
            System.out.println(we.getText());
        }

    }



}


