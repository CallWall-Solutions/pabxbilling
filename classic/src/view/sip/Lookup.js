Ext.define('MBilling.view.sip.Lookup', {
    extend: 'Ext.ux.form.field.Lookup',
    alias: 'widget.siplookup',
    name: 'id_sip',
    fieldLabel: t('SIP'),
    displayField: 'idSipname',
    displayFieldList: 'name',
    gridConfig: {
        xtype: 'siplist',
        fieldSearch: 'name',
        columns: [{
            header: t('Username'),
            dataIndex: 'idUserusername',
            flex: 2
        }, {
            header: t('Name'),
            dataIndex: 'name',
            flex: 2
        }]
    }
});