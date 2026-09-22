Ext.define('MBilling.model.TrunkGroup', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'type',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }, 'subRecords', 'id_trunk'],
    proxy: {
        type: 'uxproxy',
        module: 'trunkGroup'
    }
});