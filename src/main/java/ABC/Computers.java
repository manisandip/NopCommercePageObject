package ABC;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type.Text;

public class Computers extends Utils {

    public void ClickOnComputerCategory(){
       // ClickOnElement(_Computer);

    }
    private By _Notebook = By.linkText("Notebooks");
    public void UserClickOnNotebook(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        clickOnElement(_Notebook);
    }
    private By _dropdown = By.id("products-orderby");
    private String priceHighToLow = "Price: High to Low";

    public void UserSelectFRomPositionPriceHighToLow(){
        SelectDropDownByVisileText(_dropdown,priceHighToLow);
    }

}

