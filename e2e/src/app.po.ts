import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getWelcomeText() {
    return element(by.css('app-root h3')).getText();
  }

  getCurrentQuestionText() {
    return element(by.css('app-root h3')).getText();
  }

  findButtonByText(text: string) {
    return element(by.buttonText(text));
  }

  navigateToQuiz() {
    return browser.get('/quiz');
  }
}
