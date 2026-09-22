Ext.define('MBilling.view.did.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.didlist',
    store: 'Did',
    fieldSearch: 'did',
    buttonImportCsv: true,
    initComponent: function () {
        var me = this,
            isMobileLayout = window.isMobileLayout || window.isTablet || window.isTablets,
            groupRelease = Ext.id(),
            releaseButton = {
                xtype: 'button',
                text: t('Release DID'),
                iconCls: 'icon-delete',
                handler: 'onRelease',
                disabled: true,
                reference: 'release'
            };
        me.buttonUpdateLot = false;
        if (!isMobileLayout && App.user.isAdmin) {
            Ext.apply(releaseButton, {
                xtype: 'splitbutton',
                menu: [{
                    text: me.labelAll,
                    checked: false,
                    hidden: isMobileLayout || !App.user.isAdmin,
                    group: groupRelease,
                    value: 'all'
                }, {
                    text: me.labelSelected,
                    checked: true,
                    hidden: isMobileLayout || !App.user.isAdmin,
                    group: groupRelease,
                    value: 'selected'
                }]
            });
        }
        me.extraButtons = [releaseButton, {
            text: t('Bulk DID'),
            iconCls: '',
            handler: 'onBulk',
            hidden: !App.user.isAdmin || window.isTablet
        }];
        if (App.user.isClient) {
            me.buttonImportCsv = false;
        }
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('DID'),
            dataIndex: 'did',
            flex: 4
        }, {
            header: t('Reserved'),
            dataIndex: 'reserved',
            renderer: Helper.Util.formattyyesno,
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('Yes')],
                    [0, t('No')]
                ]
            }
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            hidden: App.user.isClient,
            hideable: !App.user.isClient,
            flex: 3
        }, {
            header: t('Status'),
            dataIndex: 'activated',
            renderer: Helper.Util.formatBooleanActive,
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('Active')],
                    [0, t('Inactive')]
                ]
            },
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Setup price'),
            dataIndex: 'connection_charge',
            renderer: Helper.Util.formatMoneyDecimal4,
            flex: 3
        }, {
            header: t('Monthly price'),
            dataIndex: 'fixrate',
            renderer: Helper.Util.formatMoneyDecimal4,
            flex: 3
        }, {
            header: t('Time used'),
            renderer: Helper.Util.formatsecondsToTime,
            dataIndex: 'secondusedreal',
            flex: 3
        }, {
            header: t('Country'),
            dataIndex: 'country',
            flex: 2
        }, {
            header: t('Description'),
            dataIndex: 'description',
            hidden: true,
            hideable: App.user.isAdmin,
            flex: 5
        }, {
            xtype: 'templatecolumn',
            tpl: '{idServername}',
            header: t('Server'),
            dataIndex: 'id_server',
            comboFilter: 'serverscombo',
            flex: 3,
            hidden: true,
            hideable: App.user.isAdmin
        }]
        me.callParent(arguments);
    }
});
