import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h2')).getText() as Promise<string>;
  }

  getPoints() {
    return element(by.css('span')).getText() as Promise<string>;
  }

  getAddButton() {
    return element(by.cssContainingText('button', 'Add'));
  }

  getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
