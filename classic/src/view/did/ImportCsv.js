Ext.define('MBilling.view.did.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.didimportcsv',
    htmlTipInfo: '<br><b>' + t('Number') + ", " + t('Setup price') + ", " + t('Monthly price') + "</b><br>" + "551156332233, 10, 5<br>" + "554153882200, 10, 5<br>" + "554155667788, 10, 5<br>" + "<b>" + t('Setup price') + ',' + t('Monthly price') + ' ' + t('is optional') + "</b>",
    fieldsImport: [{
        fieldLabel: t('Table'),
        hidden: true,
        allowBlank: true
    }]
});