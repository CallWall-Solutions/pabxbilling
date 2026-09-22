<?php
class RestrictedPhonenumberController extends Controller
{
    public $attributeOrder = 't.id';
    public $extraValues    = ['idUser' => 'username'];

    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
    ];

    public function init()
    {
        $this->instanceModel = new RestrictedPhonenumber;
        $this->abstractModel = RestrictedPhonenumber::model();
        $this->titleReport   = Yii::t('zii', 'Config');
        parent::init();
    }

    public function importCsvSetAdditionalParams()
    {
        $values = $this->getAttributesRequest();
        return [['key' => 'id_user', 'value' => $values['id_user']]];
    }
}
