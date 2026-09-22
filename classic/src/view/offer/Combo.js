Ext.define('MBilling.view.offer.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.offercombo',
    name: 'id_offer',
    fieldLabel: t('Offer'),
    displayField: 'label',
    valueField: 'id',
    value: 0,
    forceSelection: true,
    editable: false,
    extraValues: [{
        id: 0,
        label: t('Undefined')
    }],
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Offer', {
            proxy: {
                type: 'uxproxy',
                module: 'offer',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});