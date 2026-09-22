Ext.define('MBilling.view.backup.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.backupimportcsv',
    htmlTipInfo: '',
    extAllowed: ['tgz'],
    fieldLabel: t('Backup'),
    iconCls: 'icon-play'
});