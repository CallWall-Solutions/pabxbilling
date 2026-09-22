<?php
class QueueDashBoard extends Model
{

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
        return 'pkg_queue_status';
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
            ['id_queue, id_agent, priority', 'numerical', 'integerOnly' => true],
            ['keyPressed, holdtime, originalPosition, position', 'length', 'max' => 11],
            ['queue, timestamp, queue_name', 'length', 'max' => 25],
            ['status', 'length', 'max' => 30],
            ['callerId,callId', 'length', 'max' => 40],
        ];
        return $this->getExtraField($rules);
    }

    public function relations()
    {
        return [
            'idQueue' => [self::BELONGS_TO, 'Queue', 'id_queue'],
        ];
    }

}
