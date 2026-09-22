<?php
class CalleridController extends Controller
{
    public $attributeOrder        = 't.id';
    public $extraValues           = ['idUser' => 'username'];
    public $fieldsInvisibleClient = [
        'tipo',
        'tmp',
        'idUserusername',
    ];

    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
    ];

    public function init()
    {
        $this->instanceModel = new Callerid;
        $this->abstractModel = Callerid::model();
        $this->titleReport   = Yii::t('zii', 'CallerID');
        parent::init();
    }

    public function importCsvSetAdditionalParams()
    {
        $values = $this->getAttributesRequest();
        return [
            [
                'key'   => 'id_user',
                'value' => $values['id_user'],
            ], [
                'key'   => 'activated',
                'value' => 1,
            ],
        ];
    }

}
