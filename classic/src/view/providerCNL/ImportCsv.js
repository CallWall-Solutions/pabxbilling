Ext.define('MBilling.view.providerCNL.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.providercnlimportcsv',
    htmlTipInfo: '<br>cnl,zone<br>' + "11098, CVA<br>" + "11123, CVA</b>",
    fieldsImport: [{
        xtype: 'providercombo',
        width: 350
    }]
});