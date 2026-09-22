<?php
class OfferCdrController extends Controller
{
    public $attributeOrder = 'date_consumption DESC';
    public $extraValues    = ['idOffer' => 'label', 'idUser' => 'username'];

    public $fieldsFkReport = [
        'id_user'  => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
        'id_offer' => [
            'table'       => 'pkg_offer',
            'pk'          => 'id',
            'fieldReport' => 'label',
        ],
    ];

    public function init()
    {
        $this->instanceModel = new OfferCdr;
        $this->abstractModel = OfferCdr::model();
        $this->titleReport   = Yii::t('zii', 'Offer') . ' CDR';

        if (Yii::app()->session['isAdmin']) {
            $this->relationFilter['idOffer'] = [
                'condition' => "(idOffer.id_user < 2 OR idOffer.id_user IS NULL)",
            ];
        }

        /*Aplica filtro padrao por data e causa de temrinao*/
        $filter         = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;
        $filter         = $this->createCondition(json_decode($filter));
        $whereStarttime =  ! preg_match("/date_consumption/", $filter) ? ' AND date_consumption > "' . date('Y-m-d') . '"' : false;
        //$this->filter = $whereStarttime;
        parent::init();
    }

    public function extraFilterCustomAgent($filter)
    {
        //se é agente filtrar pelo user.id_user
        if (array_key_exists('idOffer', $this->relationFilter)) {
            $this->relationFilter['idOffer']['condition'] .= " AND idOffer.id_user = :agfby";
        } else {
            $this->relationFilter['idOffer'] = [
                'condition' => "idOffer.id_user = :agfby",
            ];
        }
        $this->paramsFilter[':agfby'] = Yii::app()->session['id_user'];

        return $filter;
    }

}
