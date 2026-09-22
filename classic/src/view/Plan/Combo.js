Ext.define('MBilling.view.plan.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.plancombo',
    name: 'id_plan',
    fieldLabel: t('Plan'),
    displayField: 'name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Plan', {
            proxy: {
                type: 'uxproxy',
                module: 'plan',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});
Ext.define('MBilling.view.plansignup.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.plansignupcombo',
    name: 'id_plan',
    fieldLabel: t('Plan'),
    displayField: 'name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Signup', {
            proxy: {
                type: 'uxproxy',
                module: 'signup',
                limitParam: undefined,
                actionRead: 'getPlans'
            }
        });
        me.callParent(arguments);
    }
});