package ABC;

import org.openqa.selenium.By;

import javax.management.remote.rmi._RMIConnection_Stub;

public class EmailAFriendPage extends Utils {
    private By _friendEmailAddress = By.id("FriendEmail");
    private String friendEmail = "mani12@gmail.com";
    private By _yourEmailAddress = By.id("YourEmailAddress");
    private By _emailButton = By.name("send-email");
    private String yourEmail = "mani12@test1.com";
    private By _personalMessage = By.id( "PersonalMessage");
    private String personalMessage = "Any MessageYou Want To Write Regarding Your Product";
    private String expected = "Only Registered customer can Use email a Friend feature";
    private By _referAFriendMessage = By.xpath("//div [@class='message-error validation-summary-errros'");
    private String expectedSentMsg = "Your message has been sent.";
    private By _referAFriendMessageSent = By.xpath("//div [@class='result']");

    public void verifyUserIsOnEmailAFriendPage(){
        assertURL("productemailafriend");
    }
    public void enterEmailFormDetails(){
        writeText(_friendEmailAddress,friendEmail);
        {
            String doesEmailExist = getTextAttribute(_yourEmailAddress);
            if (doesEmailExist.isEmpty()){
                writeText(_yourEmailAddress,yourEmail);
            }
            writeText(_personalMessage,personalMessage);
            ClickOnElement(_emailButton);
        }

    }
    public void verifyReferAFriendMessage(){
        assertTextMessage("Text Message Doesnot Match With Expected",expected,_referAFriendMessage);
    }

    public void verifyReferAFriendMessageSent(){
        assertTextMessage("Text Message Doesnot Match With Expected",expectedSentMsg,_referAFriendMessageSent);
    }







}

