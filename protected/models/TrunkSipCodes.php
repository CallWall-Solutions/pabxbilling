<?php
class TrunkSipCodes extends Model
{
    protected $_module = 'trunk';
    public $percentage;

    /**
     * Retorna a classe estatica da model.
     * @return Trunk classe estatica da model.
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
        return 'pkg_trunk_error';
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
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        $rules = [
            ['ip, code, total,', 'required'],
            ['total, code', 'numerical', 'integerOnly' => true],
            ['ip', 'length', 'max' => 100],
            ['code', 'length', 'max' => 5],
            ['total', 'length', 'max' => 11],

        ];
        return $this->getExtraField($rules);
    }

}
