<?php
class OfferUseController extends Controller
{
    public $attributeOrder = 't.id';
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
        $this->instanceModel = new OfferUse;
        $this->abstractModel = OfferUse::model();
        $this->titleReport   = Yii::t('zii', 'Offer Use');

        if (Yii::app()->session['isAdmin']) {
            $this->relationFilter['idUser'] = [
                'condition' => "idUser.id_user < 2",
            ];
        }
        parent::init();
    }

}
