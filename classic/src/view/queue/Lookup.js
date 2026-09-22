Ext.define('MBilling.view.queue.Lookup', {
    extend: 'Ext.ux.form.field.Lookup',
    alias: 'widget.queuelookup',
    name: 'id_queue',
    fieldLabel: t('Queue'),
    displayField: 'idQueuename',
    displayFieldList: 'name',
    gridConfig: {
        xtype: 'queuelist',
        fieldSearch: 'name',
        columns: [{
            header: t('Name'),
            dataIndex: 'name',
            flex: 2
        }]
    }
});