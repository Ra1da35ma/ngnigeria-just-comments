import { JustCommentsPage } from './app.po';

describe('just-comments App', () => {
  let page: JustCommentsPage;

  beforeEach(() => {
    page = new JustCommentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
