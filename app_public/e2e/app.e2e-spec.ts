import { Loc8rPublicPage } from './app.po';

describe('loc8r-public App', () => {
  let page: Loc8rPublicPage;

  beforeEach(() => {
    page = new Loc8rPublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
