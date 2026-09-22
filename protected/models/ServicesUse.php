<?php
class ServicesUse extends Model
{
    protected $_module = 'servicesuse';
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
        return 'pkg_services_use';
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
            ['id_user, id_services, status, month_payed, reminded', 'numerical', 'integerOnly' => true],
            ['reservationdate, releasedate, contract_period, termination_date, next_due_date', 'safe'],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idServices' => [self::BELONGS_TO, 'Services', 'id_services'],
            'idUser'     => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }

    public function beforeSave()
    {
        if ($this->getIsNewRecord()) {
            $this->status = 2;
        }

        return parent::beforeSave();
    }
}
