<?php
class UserHistoryController extends Controller
{
    public $attributeOrder = 'date DESC';
    public $extraValues    = array('idUser' => 'username');

    public $fieldsFkReport = array(
        'id_user' => array(
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ),
    );

    public function init()
    {
        $this->instanceModel = new UserHistory;
        $this->abstractModel = UserHistory::model();
        $this->titleReport   = Yii::t('zii', 'User History');

        parent::init();
    }
}
