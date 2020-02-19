package ABC;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends BasePage
{
    public void OpenBrowser() {
        System.setProperty("webdriver.chrome.driver","src/test/Resources/BrowserDriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
        driver.get("https://demo.nopcommerce.com/");
    }
    public void CloseBrowser(){
        driver.close();
    }
}
