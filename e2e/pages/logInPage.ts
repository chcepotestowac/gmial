import { browser, element, by, $ } from 'protractor';
import { IButton, IElement, ITextBox, IDropDown } from '../utilities/interfaces';

export class LogInPage {

  elements = {
    signIn: <IButton> $('#gb_70'),
    logo: <IElement> $(`#logo`),
    email: <ITextBox> $('#identifireId'),
    password: <ITextBox> $('[type="password"]'),
  };
};