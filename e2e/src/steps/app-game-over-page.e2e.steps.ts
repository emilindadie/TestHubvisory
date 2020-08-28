import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';
import { browser, ElementFinder } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

When(/^I arrive on the game over page$/, async () => {
    await page.navigateToGameOver();
});

Then(/^I'm greeted by a game over screen$/, async () => {
    await browser.waitForAngularEnabled(false);
    const retryButtonElement: ElementFinder = await page.findButtonByText('Retry');

    expect(await retryButtonElement.isPresent()).to.equal(true);
    expect(await page.getGameOverTitle()).to.equal('Game over!');
});