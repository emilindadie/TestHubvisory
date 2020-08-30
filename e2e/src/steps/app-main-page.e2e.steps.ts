import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

When(/^I arrive on the main page$/, async () => {
    await page.navigateToQuiz();
});

Then(/^I'm prompted with my first question of whether an actor is part of a movie or not$/, async () => {
    await browser.waitForAngularEnabled(false);
    expect(await page.getCurrentQuestionText()).contains('?');
});