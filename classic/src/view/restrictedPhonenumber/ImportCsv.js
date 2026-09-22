Ext.define('MBilling.view.restrictedPhonenumber.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.restrictedphonenumberimportcsv',
    htmlTipInfo: '<br>number<br>',
    fieldsImport: [{
        xtype: 'userlookup',
        width: 350
    }]
});