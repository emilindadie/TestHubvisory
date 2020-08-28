import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

When(/^I arrive on the game over page$/, async () => {
    await page.navigateToGameOver();
});

Then(/^I'm greeted by a game over screen$/, async () => {
    await browser.waitForAngularEnabled(false);
    expect(await page.getGameOverText()).to.equal('Game over!');
});