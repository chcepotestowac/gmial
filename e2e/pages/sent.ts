import { element, by, $ } from 'protractor';
import { IElement } from '../utilities/interfaces';

export class Sent {

  elements = {
    sentEmails: (text: string): IElement => element(by.cssContainingText(`.zA `, text)),
  };
};