Ext.define('MBilling.view.plan.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.planlist',
    store: 'Plan',
    fieldSearch: 'name',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Name'),
            dataIndex: 'name',
            flex: 4
        }, {
            header: t('Tech prefix'),
            dataIndex: 'techprefix',
            flex: 4,
            hidden: !App.user.isAdmin || window.isTablet
        }, {
            header: t('Date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'creationdate',
            flex: 4,
            hidden: window.isTablet
        }, {
            header: 'Port. Celular',
            dataIndex: 'portabilidadeMobile',
            flex: 2,
            renderer: Helper.Util.formattyyesno,
            filter: {
                type: 'list',
                options: [
                    [0, t('No')],
                    [1, t('Yes')]
                ]
            },
            hidden: App.user.language != 'pt_BR' || window.isTablet,
            hideable: false
        }, {
            header: 'Port. Fixo',
            dataIndex: 'portabilidadeFixed',
            flex: 2,
            renderer: Helper.Util.formattyyesno,
            filter: {
                type: 'list',
                options: [
                    [0, t('No')],
                    [1, t('Yes')]
                ]
            },
            hidden: App.user.language != 'pt_BR' || window.isTablet,
            hideable: false
        }];
        me.callParent(arguments);
    }
});