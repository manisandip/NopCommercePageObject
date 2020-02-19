package ABC;

import org.openqa.selenium.By;

public class ProductDetailsPage extends Utils {
    private By _friendEmail = By.xpath("//input[@class='friend-email']");
    private By _yourEmail = By.xpath("//input[@class='your-email']");
    private By _noteBooks = By.linkText("Notebooks");
    private By _appleMac = By.linkText("Apple MacBook Pro 13-inch");
    private By _email = By.xpath("//input[contains(@onclick,'/productemailafriend/')]");
   // private By _friendEmail = By.xpath("//input[@class='friend-email']");
    //private By _yourEmail = By.xpath("//input[@class='your-email']");
    private By _writeInTextBox = By.xpath("//*[@id='PersonalMessage']");
    private By _sendEmail = By.xpath("//input[@name = 'send-email']");

    public void VerifyUserIsOnComputerCatagoryPage() {
            assertURL("computers");
        }
        // user click on notebooks
        public void userClickOnNoteBook() {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            ClickOnElement(_noteBooks);
        }

        // user click on apple mac
        public void userClickOnAppleMac() {

            ClickOnElement(_appleMac);
        }

        //Refer to friend
        public void UserReferToFriend() {
            //click email refer
            ClickOnElement(_email);
            //Enter friend email id
            EnterText(_friendEmail, "me14@gmail.com");
            //enter your email id
            EnterText(_yourEmail, "me123@test1.com");
            //click send email button
            ClickOnElement(_sendEmail);
        }

    }
