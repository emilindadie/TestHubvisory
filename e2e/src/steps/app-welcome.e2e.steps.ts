import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I'm a user of the app$/, async () => {
    await page.navigateTo();
});

When(/^I arrive of the app$/, () => { });

Then(/^I'm greeted by a welcome screen$/, async () => {
    expect(await page.getWelcomeText()).to.equal('Welcome to the quizz ! You\'ll be asked a series of "Yes or No" questions. Answer as many as you can in the allowed time ! Good luck !');
});