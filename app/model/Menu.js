Ext.define('MBilling.model.Menu', {
    extend: 'Ext.data.Model',
    idProperty: 'controller',
    fields: [{
        name: 'text',
        convert: function(value) {
            return (value.indexOf('t(') !== -1) ? eval(value) : value;
        }
    }, 'module', 'action', 'iconCls', 'rows']
});