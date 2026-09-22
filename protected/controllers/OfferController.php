<?php
class OfferController extends Controller
{
    public $attributeOrder = 't.id';
    public $filterByUser   = false;
    public $extraValues    = ['idUser' => 'username'];
    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
    ];
    public function init()
    {
        $this->instanceModel = new Offer;
        $this->abstractModel = Offer::model();
        $this->titleReport   = Yii::t('zii', 'Offer');
        if (Yii::app()->session['isAdmin']) {
            $this->defaultFilter = '(t.id_user < 2 || t.id_user IS NULL)';
        }
        parent::init();
    }

    public function extraFilterCustomAgent($filter)
    {
        $filter                       = 't.id_user = :agfby';
        $this->paramsFilter[':agfby'] = Yii::app()->session['id_user'];

        return $filter;
    }
    public function beforeSave($values)
    {
        if (Yii::app()->session['isAgent']) {
            $values['id_user'] = Yii::app()->session['id_user'];
        }
        return $values;
    }

}
