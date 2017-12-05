Template.InsertFormDropdownInput.helpers({
    items() {
        const template = Template.instance();
        return template.allowedValues;
    },
    getItemKey() {
        const template = Template.instance();
        const data = Template.currentData();

        return template.key + 'Values.' + data;
    }
});

Template.InsertFormDropdownInput.onCreated(() => {
    const template = Template.instance();
    const data = Template.currentData().data;

    template.key = data.key;
    template.value = data.value;
    template.insertForm = data.parentInstance;
    template.allowedValues = data.allowedValues;
});

Template.InsertFormDropdownInput.onRendered(() => {
    const template = Template.instance();

    Tracker.afterFlush(() => {
        template.$('select').val(template.value);
    });
});

Template.InsertFormDropdownInput.onDestroyed(() => {});

Template.InsertFormDropdownInput.events({
    'change select': (e) => {
        const template = Template.instance();
        const value = $(e.target).val();

        template.insertForm.setFieldValue(template.key, value);
    }
});
