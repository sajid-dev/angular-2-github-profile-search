import { Angular2GithubProfilePage } from './app.po';

describe('angular2-github-profile App', () => {
  let page: Angular2GithubProfilePage;

  beforeEach(() => {
    page = new Angular2GithubProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
