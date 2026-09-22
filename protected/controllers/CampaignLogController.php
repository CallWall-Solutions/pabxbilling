<?php

class CampaignLogController extends Controller
{
    public $attributeOrder = 't.date DESC';

    public function init()
    {
        $this->instanceModel = new CampaignLog;
        $this->abstractModel = CampaignLog::model();
        $this->titleReport   = Yii::t('zii', 'CampaignLog');
        parent::init();
    }
}
