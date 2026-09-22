Ext.define('MBilling.view.general.LcrtypeCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.lcrtypecombo',
    fieldLabel: t('LCR type'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('LCR According buyer Price')],
        [0, t('LCR According seller Price')]
    ]
});