
declare namespace Cypress {
    interface Chainable {
      mSaveLocalStorage(): void
      mRestoreLocalStorage(): void
      addition(a,b):void
      xlread(a,b,c):void
      beforetest():void
    }
    interface Cypress {
      runner: any;
    }
}
