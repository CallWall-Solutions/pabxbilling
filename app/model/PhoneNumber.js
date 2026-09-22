Ext.define('MBilling.model.PhoneNumber', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_phonebook',
        type: 'int'
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'city',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'info',
        type: 'string'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, 'idPhonebookname'],
    proxy: {
        type: 'uxproxy',
        module: 'phoneNumber'
    }
});