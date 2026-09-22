<?php
class CallShopCdr extends Model
{
    protected $_module = 'callshopcdr';

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
        return 'pkg_callshop';
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
            ['id_user', 'required'],
            ['id_user, status, sessiontime', 'numerical', 'integerOnly' => true],
            ['price, buycost, markup,price_min', 'length', 'max' => 20],
            ['cabina', 'length', 'max' => 30],
            ['calledstation, sessionid', 'length', 'max' => 50],
            ['destination, sessionid', 'length', 'max' => 100],
        ];
        return $this->getExtraField($rules);

    }
}
