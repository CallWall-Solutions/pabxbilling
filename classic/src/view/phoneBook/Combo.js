Ext.define('MBilling.view.phoneBook.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.phonebookcombo',
    name: 'id_phonebook',
    fieldLabel: t('Phonebook'),
    displayField: 'name',
    forceSelection: true,
    editable: true,
    valueField: 'id',
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.PhoneBook', {
            proxy: {
                type: 'uxproxy',
                module: 'phoneBook',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});