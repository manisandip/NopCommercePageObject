package ABC;

import org.junit.After;
import org.junit.Before;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class BaseTest extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();
    @BeforeTest
    public void OpenBrowser(){
        browserSelector.OpenBrowser();
    }
//    @AfterTest
//     public void CloseBrowser(){
//        browserSelector.CloseBrowser();
   // }


}
