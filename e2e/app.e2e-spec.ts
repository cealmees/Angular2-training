import { PruebaNGCLIPage } from './app.po';

describe('prueba-ng-cli App', function() {
  let page: PruebaNGCLIPage;

  beforeEach(() => {
    page = new PruebaNGCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
