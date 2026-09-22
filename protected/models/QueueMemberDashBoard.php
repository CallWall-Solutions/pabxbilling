<?php
class QueueMemberDashBoard extends Model
{
    public $number;

    protected $_module = 'dashboardqueue';
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
        return 'pkg_queue_agent_status';
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
            ['id_queue id_user', 'numerical', 'integerOnly' => true],
            ['agentStatus, callId', 'length', 'max' => 25],
        ];
        return $this->getExtraField($rules);
    }

    /*
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idQueue' => [self::BELONGS_TO, 'Queue', 'id_queue'],
        ];
    }

}
