Ext.define('MBilling.view.phoneNumber.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.phonenumberlist',
    store: 'PhoneNumber',
    buttonImportCsv: true,
    fieldSearch: 'number',
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Reprocess'),
            iconCls: 'callshop',
            handler: 'reprocessar',
            disabled: false
        }];
        me.buttonUpdateLot = App.user.isAdmin && !window.isTablet;
        me.buttonCsv = !window.isTablet;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Number'),
            dataIndex: 'number',
            flex: 4
        }, {
            header: t('Phonebook'),
            dataIndex: 'idPhonebookname',
            filter: {
                type: 'string',
                field: 'idPhonebook.name'
            },
            flex: 4
        }, {
            header: t('Status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleanActive,
            comboRelated: 'statuscombo',
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('Active')],
                    [0, t('Inactivated')],
                    [2, t('Pending')],
                    [3, t('Sent')],
                    [4, t('Blocked')],
                    [5, t('AMD')]
                ]
            }
        }, {
            header: t('Name'),
            dataIndex: 'name',
            hidden: true,
            hideable: true,
            flex: 4
        }, {
            header: t('City'),
            dataIndex: 'city',
            hidden: true,
            hideable: true,
            flex: 4
        }, {
            header: t('Description'),
            dataIndex: 'info',
            hidden: true,
            flex: 4
        }, {
            header: t('Date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'creationdate',
            hidden: true,
            hideable: App.user.isAdmin,
            flex: 4
        }]
        me.callParent(arguments);
    }
});