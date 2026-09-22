<?php
class StatusSystem extends Model
{
    protected $_module = 'user';
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
        return 'pkg_status_system';
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
            ['cpuMediaUso,cpuPercent,memUsed,networkin,networkout,disk_free,disk_perc', 'numerical'],
            ['date', 'length', 'max' => 30],

        ];
        return $this->getExtraField($rules);
    }

}
