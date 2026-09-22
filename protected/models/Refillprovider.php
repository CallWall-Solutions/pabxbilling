<?php
class Refillprovider extends Model
{
    protected $_module = 'refillprovider';
    /**
     * Retorna a classe estatica da model.
     * @return Refilltrunk classe estatica da model.
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
        return 'pkg_refill_provider';
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
            ['credit, id_provider', 'required'],
            ['id_provider, payment', 'numerical', 'integerOnly' => true],
            ['description', 'length', 'max' => 500],

        ];
        return $this->getExtraField($rules);
    }
    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idProvider' => [self::BELONGS_TO, 'Provider', 'id_provider'],
        ];
    }
}
