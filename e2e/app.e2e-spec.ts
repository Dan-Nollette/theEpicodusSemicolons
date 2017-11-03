import { TheEpicodusSemicolonsPage } from './app.po';

describe('the-epicodus-semicolons App', () => {
  let page: TheEpicodusSemicolonsPage;

  beforeEach(() => {
    page = new TheEpicodusSemicolonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
