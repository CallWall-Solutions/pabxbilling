<?php
class WHMCSController extends Controller
{

    public $attributeOrder = 'id';
    public $extraValues    = ['idUser' => 'username'];
    public function init()
    {
        $this->instanceModel = new WHMCS;
        $this->abstractModel = WHMCS::model();
        $this->titleReport   = Yii::t('zii', 'WHMCS');

        parent::init();
    }
}
