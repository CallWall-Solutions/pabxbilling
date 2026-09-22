<?php
class RateCallshopController extends Controller
{
    public $attributeOrder = 't.id';

    public function init()
    {
        $this->instanceModel = new RateCallshop;
        $this->abstractModel = RateCallshop::model();
        $this->titleReport   = Yii::t('zii', 'Rates') . ' ' . Yii::t('zii', 'CallShop');
        parent::init();
    }

    public function actionSave()
    {
        $values = $this->getAttributesRequest();
        if (Yii::app()->session['isAdmin'] && (isset($values['id']) && $values['id'] == 0)) {
            echo json_encode([
                $this->nameSuccess => false,
                $this->nameMsg     => $this->msgError,
            ]);
            exit;
        }
        parent::actionSave();
    }

    public function extraFilterCustomClient($filter)
    {

        //se for cliente filtrar pelo pkg_user.id
        $filter .= ' AND id_user = :clfby';
        $this->paramsFilter[':clfby'] = Yii::app()->session['id_user'];

        return $filter;
    }

    public function importCsvSetAdditionalParams()
    {
        $values = $this->getAttributesRequest();
        return [['key' => 'id_user', 'value' => Yii::app()->session['id_user']]];
    }
}
