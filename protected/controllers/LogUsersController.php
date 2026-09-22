<?php
class LogUsersController extends Controller
{
    public $attributeOrder = 't.date DESC';
    public $extraValues    = ['idUser' => 'username', 'idLogActions' => 'name'];

    public $fieldsFkReport = [
        'id_user'          => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
        'idLogActionsname' => [
            'table'       => 'pkg_log_actions',
            'pk'          => 'id',
            'fieldReport' => 'name',
            'where'       => 'id',
        ],
    ];
    public function init()
    {
        $this->instanceModel = new LogUsers;
        $this->abstractModel = LogUsers::model();
        $this->titleReport   = Yii::t('zii', 'Log Users');
        parent::init();
    }

    public function actionDestroy()
    {
        echo json_encode([
            $this->nameSuccess   => false,
            $this->nameMsgErrors => Yii::t('zii', 'Not allowed delete in this module'),
        ]);
        exit;
    }

}
