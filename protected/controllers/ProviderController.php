<?php

class ProviderController extends Controller
{
    public $attributeOrder      = 't.provider_name ASC';
    public $filterByUser   = false;

    public function init()
    {
        $this->instanceModel = new Provider;
        $this->abstractModel = Provider::model();
        $this->titleReport   = Yii::t('zii', 'Provider');
        parent::init();
    }
}
