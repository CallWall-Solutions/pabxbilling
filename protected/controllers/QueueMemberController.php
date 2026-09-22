<?php

class QueueMemberController extends Controller
{
    public $attributeOrder = 't.id';
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
        $this->instanceModel = new QueueMember;
        $this->abstractModel = QueueMember::model();
        $this->titleReport   = Yii::t('zii', 'Queue Member');
        parent::init();
    }

    public function beforeSave($values)
    {
        $this->checkRelation($values);

        if (isset($values['interface'])) {
            $modelSip = Sip::model()->find(
                "id = :id",
                ['id' => $values['interface']]
            );

            $values['id_user']   = $modelSip->id_user;
            $values['interface'] = 'PJSIP/' . $modelSip->name;
        }
        if (isset($values['queue_name'])) {
            $modelQueue = Queue::model()->find(
                "id = :id OR name = :id",
                ['id' => $values['queue_name']]
            );
            $values['queue_name'] = $modelQueue->name;
        }

        return $values;
    }

    public function checkRelation($values)
    {

        if ($this->isNewRecord) {

            $modelSip   = Sip::model()->findByPk((int) $values['interface']);
            $modelQueue = Queue::model()->findByPk((int) $values['queue_name']);

            if ($modelSip->id_user != $modelQueue->id_user) {
                echo json_encode([
                    'success' => false,
                    'rows'    => [],
                    'errors'  => ['interface' => ['The SIP ACCOUNT must belong to the QUEUE owner']],
                ]);
                exit;
            }
        } else {
            if (isset($values['id']) && isset($values['interface'])) {

                $modelQueueMember = QueueMember::model()->findByPk((int) $values['id']);

                $modelSip   = Sip::model()->findByPk((int) $values['interface']);
                $modelQueue = Queue::model()->find('name = :key', [':key' => $modelQueueMember['queue_name']]);

                if ($modelSip->id_user != $modelQueue->id_user) {
                    echo json_encode([
                        'success' => false,
                        'rows'    => [],
                        'errors'  => ['interface' => ['The SIP ACCOUNT must belong to the QUEUE owner']],
                    ]);
                    exit;
                }
            }
        }
    }

    public function afterSave($model, $values)
    {
        AsteriskAccess::instance()->generateQueueFile();
    }
    public function afterUpdateAll($strIds)
    {
        AsteriskAccess::instance()->generateQueueFile();
        return;
    }

    public function afterDestroy($values)
    {
        AsteriskAccess::instance()->generateQueueFile();
    }
}
