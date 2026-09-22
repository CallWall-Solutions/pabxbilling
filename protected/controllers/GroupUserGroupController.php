<?php
class GroupUserGroupController extends Controller
{
    public $attributeOrder = 't.id';
    public $config;
    public $nameModelRelated   = 'GroupUserGroup';
    public $nameFkRelated      = 'id_group_user';
    public $nameOtherFkRelated = 'id_group';

    public function init()
    {
        if (Yii::app()->session['user_type'] != 1) {
            exit;
        }
        $this->instanceModel        = new GroupUser;
        $this->abstractModel        = GroupUser::model();
        $this->abstractModelRelated = GroupUserGroup::model();
        $this->titleReport          = Yii::t('zii', 'GroupUserGroup');
        parent::init();
    }

    public function extraFilterCustom($filter)
    {
        $filter .= ' AND t.id_user_type = :d32d';
        $this->paramsFilter[':d32d'] = 1;

        return $filter;
    }

}
