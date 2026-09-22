<?php
class DidHistoryController extends Controller
{
    public $attributeOrder = 't.id';

    public function init()
    {
        $this->instanceModel = new DidHistory;
        $this->abstractModel = DidHistory::model();
        $this->titleReport   = Yii::t('zii', 'DID History');
        parent::init();
    }
}
