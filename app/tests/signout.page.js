import { Selector } from 'testcafe';

class SignoutPage {
  constructor() {
    this.pageId = '#signout-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(150000).expect(this.pageSelector.exists).ok();
  }
}

export const signoutPage = new SignoutPage();
