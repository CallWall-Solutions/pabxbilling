Ext.define('MBilling.model.Module', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'text',
        convert: function(value) {
            return (value.indexOf('t(') !== -1) ? eval(value) : value;
        }
    }, 'module', 'icon_cls', {
        name: 'id_module',
        type: 'int',
        useNull: true
    }, {
        name: 'idModuletext',
        convert: function(value) {
            console.log(value);
            if (value) {
                return (value.indexOf('t(') !== -1) ? eval(value) : value;
            } else {
                return value;
            }
        }
    }, {
        name: 'priority',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'module'
    }
});