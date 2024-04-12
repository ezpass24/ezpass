import { Selector } from 'testcafe';

class ListPasswordsPage {
  constructor() {
    this.pageId = '#list-passwords-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(100000).expect(this.pageSelector.exists).ok();
  }

  /** Checks that this page has a table. */
  async hasTable(testController) {
    const rowCount = Selector('tr').count;
    await testController.expect(rowCount).gte(2);
  }

  async gotoListPasswordsPage(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#basic-navbar-nav');
    await testController.click('#list-password-nav');
  }
}

export const listPasswordsPage = new ListPasswordsPage();
