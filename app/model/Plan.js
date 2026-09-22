Ext.define('MBilling.model.Plan', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'lcrtype',
        type: 'int'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'signup',
        type: 'int'
    }, {
        name: 'portabilidadeMobile',
        type: 'int'
    }, {
        name: 'portabilidadeFixed',
        type: 'int'
    }, {
        name: 'ini_credit',
        type: 'string'
    }, {
        name: 'play_audio',
        type: 'int'
    }, 'idUserusername', 'id_services', {
        name: 'techprefix',
        type: 'string'
    }, {
        name: 'tariff_limit',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'plan'
    }
});