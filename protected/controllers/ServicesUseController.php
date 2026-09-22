<?php
class ServicesUseController extends Controller
{
    public $attributeOrder = 'status DESC, DAY( reservationdate ) DESC';
    public $extraValues    = ['idServices' => 'name,price,type', 'idUser' => 'username'];

    public $fieldsInvisibleClient = [
        'id_user',
        'reminded',
        'idUserusername',
    ];
    public function init()
    {
        $this->instanceModel = new ServicesUse;
        $this->abstractModel = ServicesUse::model();
        $this->titleReport   = Yii::t('zii', 'Services Use');

        $sql = "UPDATE pkg_services_use SET next_due_date = date_add(`reservationdate`, interval`month_payed`month)";
        Yii::app()->db->createCommand($sql)->execute();
        $sql = "UPDATE pkg_services_use SET next_due_date = '' WHERE status = 0";
        Yii::app()->db->createCommand($sql)->execute();

        parent::init();
    }

    public function actionCancelService()
    {
        $module = $this->instanceModel->getModule();
        $this->checkActionAccess([], $module, 'canUpdate');

        $id = isset($_REQUEST['id']) ? (int) $_REQUEST['id'] : 0;
        if ($id < 1) {
            $this->sendCancelServiceNotFound();
            return;
        }

        $this->filter       = 't.id = :serviceId';
        $this->paramsFilter = [':serviceId' => $id];
        $this->filter       = $this->extraFilter($this->filter);
        $this->applyFilterToLimitedAdmin();

        $criteria = new CDbCriteria([
            'condition' => $this->filter,
            'params'    => $this->paramsFilter,
            'with'      => $this->relationFilter,
        ]);

        $modelServicesUse = $this->abstractModel->find($criteria);
        if (! isset($modelServicesUse->id)) {
            $this->sendCancelServiceNotFound();
            return;
        }

        ServicesProcess::release((int) $modelServicesUse->id);
    }

    private function sendCancelServiceNotFound()
    {
        header('HTTP/1.0 404 Not Found');
        echo json_encode([
            $this->nameSuccess => false,
            $this->nameMsg     => $this->msgRecordNotFound,
        ]);
    }

}
