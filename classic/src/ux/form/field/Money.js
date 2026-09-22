Ext.define('Ext.ux.form.field.Money', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.moneyfield',
    requires: ['Ext.ux.TextMaskPlugin'],
    money: true,
    initComponent: function() {
        var me = this;
        me.mask = App.user.currency + ' #9.999.990,' + App.user.decimalPrecision;
        me.plugins = ['textmask', 'markallowblank'];
        me.callParent(arguments);
    }
});