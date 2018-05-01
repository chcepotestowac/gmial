import { browser, protractor, element, by } from 'protractor';
import { LogInPage } from '../pages/logInPage';
import { BasePage } from '../pages/basePage';
import { Sent } from '../pages/sent';

describe("Gmail log in and send email test", function () {

    let logInPage = new LogInPage();
    let basePage = new BasePage();
    let sent = new Sent();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization=true;        
        browser.manage().window().maximize();
    });    

    afterEach(() => {
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization=false;        
    });   

    it("Gmail log in and send email test", () => {
        browser.get("http://google.com");
        logInPage.elements.signIn.click();
        expect(logInPage.elements.logo.isDisplayed()).toBeTruthy();
        logInPage.elements.signIn.click();
        logInPage.elements.email.click();
        logInPage.elements.email.sendKeys('login');
        protractor.Key.ENTER; 
        logInPage.elements.password.click();
        logInPage.elements.password.sendKeys('password');
        protractor.Key.ENTER;
        expect(basePage.elements.logo.isDisplayed()).toBeTruthy();
        basePage.elements.create.click();
        basePage.newEmail.to.click();
        basePage.newEmail.to.sendKeys('test@test.test');
        basePage.newEmail.topic.click();
        basePage.newEmail.topic.sendKeys('testTopic');
        basePage.newEmail.body.click();
        basePage.newEmail.body.sendKeys('testBody');
        basePage.newEmail.sent.click();
        expect(sent.elements.sentEmails('testTopic').isPresent()).toBeTruthy();
    });
});