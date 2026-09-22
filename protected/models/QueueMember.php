<?php
class QueueMember extends Model
{
    protected $_module = 'queuemember';
    /**
     * Retorna a classe estatica da model.
     * @return Prefix classe estatica da model.
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return nome da tabela.
     */
    public function tableName()
    {
        return 'pkg_queue_member';
    }

    /**
     * @return nome da(s) chave(s) primaria(s).
     */
    public function primaryKey()
    {
        return 'id';
    }

    /**
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['id,interface, id_user', 'required'],
            ['id_user, paused', 'numerical', 'integerOnly' => true],
            ['membername', 'length', 'max' => 40],
            ['queue_name, interface', 'length', 'max' => 128],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idUser' => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }

    public function beforeSave()
    {
        $this->uniqueid = $this->id;
        return parent::beforeSave();
    }

    public function truncateQueueAgentStatus()
    {
        $sql = "TRUNCATE pkg_queue_agent_status";
        Yii::app()->db->createCommand($sql)->execute();
    }
}
