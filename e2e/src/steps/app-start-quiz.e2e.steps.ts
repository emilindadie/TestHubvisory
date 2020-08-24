
import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';
import { ElementFinder, browser } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

When(/^I click on Start$/, async () => {
    const startButtonElement: ElementFinder = await page.findButtonByText('Start');
    expect(await startButtonElement.isPresent()).to.equal(true);
    await startButtonElement.click();
});

Then(/^the quizz starts$/, async () => {
    await browser.waitForAngularEnabled(false);
    const noButtonElement: ElementFinder = await page.findButtonByText('No');
    const yesButtonElement: ElementFinder = await page.findButtonByText('Yes');

    expect(await noButtonElement.isPresent()).to.equal(true);
    expect(await yesButtonElement.isPresent()).to.equal(true);
});
