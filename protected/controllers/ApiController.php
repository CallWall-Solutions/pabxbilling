<?php
class ApiController extends Controller
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
        $this->instanceModel = new Api;
        $this->abstractModel = Api::model();
        $this->titleReport   = Yii::t('zii', 'API');
        parent::init();
    }

    public function setAttributesModels($attributes, $models)
    {
        $pkCount = is_array($attributes) || is_object($attributes) ? $attributes : [];
        for ($i = 0; $i < count($pkCount); $i++) {
            $attributes[$i]['api_secret'] = substr($attributes[$i]['api_secret'], 0, 6) . '*********************';
        }
        return $attributes;
    }

}
