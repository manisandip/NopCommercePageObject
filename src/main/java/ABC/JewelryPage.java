package ABC;

import org.openqa.selenium.By;

public class JewelryPage extends Utils {
    private By _Product1 = By.xpath("//input[contains(@onclick,'/compareproducts/add/40')]");
    private By _Product2 = By.xpath("//input[contains(@onclick,'/compareproducts/add/42')]");
    private By _ComparisonLink = By.xpath("//a[(text()='product comparison')]");
   // private By _ProductBracelet = By.xpath("//a[contains(text(),'Flower Girl Bracelet')]");
    public void VerifyUserIsOnJeweleryPage(){
        assertURL("jewelry");
    }
    public void ChooseProductsToCompare(){
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        ClickOnElement(_Product1);
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        ClickOnElement(_Product2);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        ClickOnElement(_ComparisonLink);
    }
}