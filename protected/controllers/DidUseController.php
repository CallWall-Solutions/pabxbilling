<?php
class DidUseController extends Controller
{
    public $attributeOrder = 'status DESC, DAY( reservationdate ) ASC';
    public $extraValues    = ['idDid' => 'did', 'idUser' => 'username'];

    public $fieldsInvisibleClient = [
        'id_user',
        'month_payed',
        'reminded',
        'idUserusername',
    ];
    public function init()
    {

        $this->instanceModel = new DidUse;
        $this->abstractModel = DidUse::model();
        $this->titleReport   = Yii::t('zii', 'DIDs Use');

        $sql = "UPDATE pkg_did_use SET next_due_date = date_add(`reservationdate`, interval`month_payed`month)";
        Yii::app()->db->createCommand($sql)->execute();
        $sql = "UPDATE pkg_did_use SET next_due_date = '' WHERE status = 0";
        Yii::app()->db->createCommand($sql)->execute();
        parent::init();
    }

}
