<?php
class RateProvider extends Model
{
    protected $_module = 'rateprovider';
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
        return 'pkg_rate_provider';
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
            ['id_prefix, id_provider', 'required'],
            ['id_prefix, id_provider, buyrateinitblock, buyrateincrement, minimal_time_buy', 'numerical', 'integerOnly' => true],
            ['buyrate', 'length', 'max' => 15],
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
            'idPrefix'   => [self::BELONGS_TO, 'Prefix', 'id_prefix'],
        ];
    }
}
