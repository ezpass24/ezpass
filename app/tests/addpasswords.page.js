import { Selector } from 'testcafe';

class AddPasswordsPage {
  constructor() {
    this.pageId = '#add-pass-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(5000).expect(this.pageSelector.exists).ok();
  }

  async addPassword(testController) {
    await testController.typeText('#add-pass-name', 'Amazon');
    await testController.typeText('#add-pass-pass', 'JeffreyBezos');
    await testController.click('#add-pass-submit');
  }

  async gotoAddPasswordsPage(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#basic-navbar-nav');
    await testController.click('#add-password-nav');
  }

}

export const addPasswordsPage = new AddPasswordsPage();
