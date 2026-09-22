Ext.define('MBilling.view.general.GroupCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.groupcombo',
    fieldLabel: t('Group'),
    value: 'config_group_title',
    forceSelection: true,
    editable: false,
    store: [
        ['global', 'global'],
        ['callback', 'callback'],
        ['agi-conf1', 'agi-conf1'],
        ['agi-conf2', 'agi-conf2']
    ]
});
Ext.define('MBilling.view.general.StateCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.statecombo',
    name: 'state',
    fieldLabel: t('State'),
    displayField: 'nome',
    valueField: 'sigla',
    forceSelection: true,
    editable: false,
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Signup', {
            proxy: {
                type: 'uxproxy',
                module: 'signup',
                limitParam: undefined,
                actionRead: 'getSignupStates'
            }
        });
        me.callParent(arguments);
    }
});