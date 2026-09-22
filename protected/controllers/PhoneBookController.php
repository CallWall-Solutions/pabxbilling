<?php
class PhoneBookController extends Controller
{
    public $attributeOrder      = 't.name ASC';
    public $extraValues         = ['idUser' => 'username'];
    public $filterByUser        = true;
    public $defaultFilterByUser = 'b.id_user';
    public $join                = 'JOIN pkg_user b ON t.id_user = b.id';

    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
    ];
    public $fieldsInvisibleClient = [
        'id_user',
        'idCardusername',
    ];

    public function init()
    {
        $this->instanceModel = new PhoneBook;
        $this->abstractModel = PhoneBook::model();
        $this->titleReport   = Yii::t('zii', 'Phonenumbers');

        parent::init();
    }

    public function extraFilterCustom($filter)
    {
        if (Yii::app()->session['user_type'] > 1 && $this->filterByUser) {
            $filter .= ' AND (' . $this->defaultFilterByUser . ' = :dfby';
            $filter .= ' OR t.id_user = :dfby)';
            $this->paramsFilter[':dfby'] = Yii::app()->session['id_user'];
        }
        return $filter;
    }

    public function actionRead($asJson = true, $condition = null)
    {
        $filter       = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;
        $filter       = $this->createCondition(json_decode($filter));
        $this->filter =  ! preg_match("/status/", $filter) ? ' AND status = 1' : '';
        parent::actionRead($asJson = true, $condition = null);
    }

}
