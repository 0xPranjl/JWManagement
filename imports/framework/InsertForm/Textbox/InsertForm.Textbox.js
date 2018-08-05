import autosize from 'autosize';

import './InsertForm.Textbox.jade';

import { getKey, getTitle, getEntityTranslation } from '/imports/framework/Helpers';
import { hasError, getErrorClass, getEntityErrorTranslation } from '/imports/framework/Helpers.Error';

Template.InsertFormTextbox.helpers({
  getKey,
  getEntityTranslation,
  getTitle,
  hasError,
  getErrorClass,
  getEntityErrorTranslation,
  getValue() {
    const data = Template.currentData().data;
    if (data.value != null) {
      return data.value;
    }
    return '';
  }
});

Template.InsertFormTextbox.onCreated(() => {
  const template = Template.instance();
  const data = Template.currentData().data;

  template.key = data.key;
  template.insertForm = data.parentInstance;
});

Template.InsertFormTextbox.onRendered(() => {
  autosize(document.querySelectorAll('textarea'));
});

Template.InsertFormTextbox.onDestroyed(() => {});

Template.InsertFormTextbox.events({
  'change textarea': (e, template) => {
    const value = $(e.target).val().trim();

    template.insertForm.setFieldValue(template.key, value);
  }
});