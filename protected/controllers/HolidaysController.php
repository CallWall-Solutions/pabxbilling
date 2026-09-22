<?php
class HolidaysController extends Controller
{
    public $attributeOrder = 't.id';
    public function init()
    {
        $this->instanceModel = new Holidays;
        $this->abstractModel = Holidays::model();
        $this->titleReport   = Yii::t('zii', 'Holidays');
        parent::init();
    }

}
