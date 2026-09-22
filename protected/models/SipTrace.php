<?php
class SipTrace extends Model
{
    protected $_module = 'siptrace';
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
        return 'pkg_trace';
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
            ['status,timeout,in_use,port', 'numerical', 'integerOnly' => true],
            ['filter', 'length', 'max' => 50],
        ];
        return $this->getExtraField($rules);
    }
}
