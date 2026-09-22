Ext.define('MBilling.model.TemplateMail', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'mailtype',
        type: 'string'
    }, {
        name: 'fromemail',
        type: 'string'
    }, {
        name: 'fromname',
        type: 'string'
    }, {
        name: 'subject',
        type: 'string'
    }, {
        name: 'messagehtml',
        type: 'string'
    }, {
        name: 'language',
        type: 'string'
    }, {
        name: 'status',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'templateMail'
    }
});