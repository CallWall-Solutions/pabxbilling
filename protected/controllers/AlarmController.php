<?php
class AlarmController extends Controller
{
    public $attributeOrder = 't.id';
    public $extraValues    = ['idPlan' => 'name'];

    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_plan',
            'pk'          => 'id',
            'fieldReport' => 'name',
        ],
    ];

    public function init()
    {
        $this->instanceModel = new Alarm;
        $this->abstractModel = Alarm::model();
        $this->titleReport   = Yii::t('zii', 'Alarm');
        parent::init();
    }
}
