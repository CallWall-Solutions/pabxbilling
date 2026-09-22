<?php
class ProviderCNLController extends Controller
{
    public $attributeOrder = 'id';
    public $filterByUser   = false;
    public $extraValues    = ['idProvider' => 'provider_name'];

    public $fieldsFkReport = [
        'id_provider' => [
            'table'       => 'pkg_provider',
            'pk'          => 'id',
            'fieldReport' => 'provider_name',
        ],
    ];
    public function init()
    {
        $this->instanceModel = new ProviderCNL;
        $this->abstractModel = ProviderCNL::model();
        $this->titleReport   = Yii::t('zii', 'Provider CNL');
        parent::init();
    }

    public function importCsvSetAdditionalParams()
    {
        $values = $this->getAttributesRequest();
        return [['key' => 'id_provider', 'value' => $values['id_provider']]];
    }
}
