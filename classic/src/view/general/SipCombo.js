Ext.define('MBilling.view.general.SipCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.sipcombo',
    fieldLabel: t('Provider tech'),
    forceSelection: true,
    editable: false,
    value: 'pjsip',
    store: [
        ['pjsip', 'pjsip'],
        ['dahdi', 'dahdi'],
        ['khomp', 'khomp'],
        ['iax2', 'iax2'],
        ['dgv', 'dgv'],
        ['ooh323', 'ooh323'],
        ['extra', 'extra'],
        ['Dongle', 'Dongle'],
        ['Local', 'Local']
    ]
});