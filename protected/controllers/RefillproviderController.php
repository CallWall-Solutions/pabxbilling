<?php
class RefillproviderController extends Controller
{
    public $attributeOrder = 'id';
    public $extraValues    = ['idProvider' => 'provider_name'];
    public $filterByUser   = false;
    public $fieldsFkReport = [
        'id_provider' => [
            'table'       => 'pkg_provider',
            'pk'          => 'id',
            'fieldReport' => 'provider_name',
        ],
    ];

    public function init()
    {
        $this->instanceModel = new Refillprovider;
        $this->abstractModel = Refillprovider::model();
        $this->titleReport   = Yii::t('zii', 'Refill Providers');

        parent::init();
    }

    public function afterSave($model, $values)
    {
        if ($this->isNewRecord) {
            $resultProvider     = Provider::model()->findByPk((int) $model->id_provider);
            $creditOld          = $resultProvider->credit;
            $model->description = $model->description . ', ' . Yii::t('zii', 'Old credit') . ' ' . round($creditOld, 2);

            //add credit
            $resultProvider->credit = $model->credit > 0 ? $resultProvider->credit + $model->credit : $resultProvider->credit - ($model->credit * -1);
            $resultProvider->saveAttributes(['credit' => $resultProvider->credit]);

        }
        return;
    }

}
