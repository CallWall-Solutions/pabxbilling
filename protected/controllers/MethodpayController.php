<?php

class MethodpayController extends Controller
{
    public $attributeOrder = 'id';
    public $extraValues    = ['idUser' => 'username'];

    public $fieldsFkReport = [
        'id_user' => [
            'table'       => 'pkg_user',
            'pk'          => 'id',
            'fieldReport' => 'username',
        ],
    ];

    public $fieldsInvisibleClient = [
        'pagseguro_TOKEN',
        'P2P_CustomerSiteID',
        'P2P_KeyID',
        'P2P_Passphrase',
        'P2P_RecipientKeyID',
        'P2P_tax_amount',
        'client_id',
        'client_secret',
        'SLAppToken',
        'SLAccessToken',
        'SLSecret',
        'SLIdProduto',
        'SLvalidationtoken',

    ];
    public $fieldsInvisibleAgent = [
        'id_group',
    ];

    public function init()
    {
        $this->instanceModel = new Methodpay;
        $this->abstractModel = Methodpay::model();
        $this->titleReport   = Yii::t('zii', 'Payment Methods');
        parent::init();
    }

    public function actionRead2()
    {

        $values = explode(":", $this->config['global']['purchase_amount']);

        $amount = [];

        foreach ($values as $key => $value) {

            array_push(
                $amount,
                [
                    'id'     => $key + 1,
                    'amount' => $value
                ]
            );
        }

        echo json_encode([
            $this->nameRoot  => $amount,
            $this->nameCount => 10,
            $this->nameSum   => [],
        ]);
    }

    public function extraFilterCustom($filter)
    {
        if (Yii::app()->session['user_type'] > 1 && $this->filterByUser) {
            if (Yii::app()->session['isAgent']) {
                $filter .= ' AND t.id_user = :dfbyb AND active = :dfbyb';
                $this->paramsFilter[':dfbyb'] = 1;
            } else if (Yii::app()->session['isClient']) {
                $filter .= ' AND t.id_user = :dfbya AND active = :dfbyb';
                $this->paramsFilter[':dfbya'] = Yii::app()->session['id_agent'];
                $this->paramsFilter[':dfbyb'] = 1;
            }
        }
        return $filter;
    }

    public function setAttributesModels($attributes, $models)
    {
        foreach ($attributes as $key => $attribute) {
            if (strtolower((string) $attribute['payment_method']) !== 'paghiper') {
                continue;
            }

            $showFields = array_filter(explode(',', (string) $attribute['showFields']));
            if (! in_array('client_id', $showFields, true)) {
                $showFields[] = 'client_id';
            }
            $attributes[$key]['showFields'] = implode(',', $showFields);
        }

        return $attributes;
    }
}
