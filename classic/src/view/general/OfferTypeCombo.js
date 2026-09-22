Ext.define('MBilling.view.general.OfferTypeCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.offertypecombo',
    fieldLabel: t('Offer type'),
    forceSelection: true,
    editable: false,
    value: 0,
    store: [
        [0, t('Unlimited calls')],
        [1, t('Number free calls')],
        [2, t('Free seconds')]
    ]
});
Ext.define('MBilling.view.general.BillingTypeCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.billingtypecombo',
    fieldLabel: t('Billing type'),
    forceSelection: true,
    editable: false,
    value: 0,
    store: [
        [0, t('Monthly')],
        [1, t('Weekly')]
    ]
});