Ext.define('MBilling.view.ivr.Lookup', {
    extend: 'Ext.ux.form.field.Lookup',
    alias: 'widget.ivrlookup',
    name: 'id_ivr',
    fieldLabel: t('IVR'),
    displayField: 'idIvrname',
    displayFieldList: 'name',
    gridConfig: {
        xtype: 'ivrlist',
        fieldSearch: 'name',
        columns: [{
            header: t('Name'),
            dataIndex: 'name',
            flex: 5
        }, {
            header: t('Username'),
            dataIndex: 'idUsernumber',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 4
        }]
    }
});