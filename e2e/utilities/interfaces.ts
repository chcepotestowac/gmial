import { promise } from 'protractor';

export interface ITextBox {
  sendKeys(string): promise.Promise<void>;
  clear(): promise.Promise<void>;
  getText(): promise.Promise<string>;
  getAttribute(string): promise.Promise<string>;
  isDisplayed(): promise.Promise<boolean>;
  click(): promise.Promise<void>;
}

export interface IButton {
  click(): promise.Promise<void>;
  isDisplayed(): promise.Promise<boolean>;
  getText(): promise.Promise<string>;
  isEnabled(): promise.Promise<boolean>;
  isPresent(): promise.Promise<boolean>;
}

export interface IDropDown {
  click(): promise.Promise<void>;
}

export interface IElement {
  isDisplayed(): promise.Promise<boolean>;
  isPresent(): promise.Promise<boolean>;
  click(): promise.Promise<void>;
  sendKeys(string): promise.Promise<void>;
  clear(): promise.Promise<void>;
  getText(): promise.Promise<string>;
  isEnabled(): promise.Promise<boolean>;
  getAttribute(string): promise.Promise<string>;
}
