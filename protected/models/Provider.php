<?php
class Provider extends Model
{
    protected $_module = 'provider';
    /**
     * Retorna a classe estatica da model.
     * @return Provider classe estatica da model.
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
        return 'pkg_provider';
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
            ['provider_name', 'required'],
            ['description, credit_control', 'length', 'max' => 100],
            ['credit', 'type', 'type' => 'double'],
            ['provider_name', 'unique'],
        ];
        return $this->getExtraField($rules);
    }

}
