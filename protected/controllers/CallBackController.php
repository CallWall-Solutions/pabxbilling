<?php
class CallBackController extends Controller
{
    public $attributeOrder        = 't.id DESC';
    public $extraValues           = ['idUser' => 'username', 'idDid' => 'did'];
    public $fieldsInvisibleClient = [
        'variable',
    ];

    public function init()
    {
        $this->instanceModel = new CallBack;
        $this->abstractModel = CallBack::model();
        $this->titleReport   = Yii::t('zii', 'CallBack');
        parent::init();
    }

    public function actionReprocesar($value = '')
    {
        # recebe os parametros para o filtro
        $filter = $_POST['filter'];

        $filter = $filter ? $this->createCondition(json_decode($filter)) : '';

        $filter = preg_replace('/t.status/', 'status', $filter);

        CallBack::model()->updateAll(['status' => '1', 'num_attempt' => 0, 'sessiontime' => 0], $filter, $this->paramsFilter);
        echo json_encode([
            'success' => true,
            'msg'     => $this->msgSuccess,
        ]);
    }
}
