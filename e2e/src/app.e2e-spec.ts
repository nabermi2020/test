import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('e2eDemo');
  });

  it('Should click 3 times and reset', () => {
    page.navigateTo();


    expect(page.getPoints()).toBe('0');

    page.getAddButton().click();
    page.getAddButton().click();
    page.getAddButton().click();
    expect(page.getPoints()).toBe('3');

    page.getResetButton().click();
    expect(page.getPoints()).toBe('0');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
