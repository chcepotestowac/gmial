import { browser, element, by, $ } from 'protractor';
import { IButton, IElement, ITextBox, IDropDown } from '../utilities/interfaces';

export class BasePage {

  elements = {
    logo: <IElement> $(`.gb_ke`),
    create: <IButton> $('.z0 > div'),
    sent: <IButton> $('[href="https://mail.google.com/mail/u/0/#sent"]'),
  };

  newEmail ={
    to: <ITextBox> $('.wO > textarea'),
    topic: <ITextBox> $('[id=":13n"]'),
    body: <ITextBox> $('[id=":14s"]'),
    sent: <IButton> $('[id=":13d"]'),
  };
};