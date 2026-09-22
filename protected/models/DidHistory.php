<?php
class DidHistory extends Model
{
    protected $_module = 'didhistory';
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
        return 'pkg_did_history';
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
            ['did, username', 'length', 'max' => 50],
            ['description', 'length', 'max' => 500],
            ['month_payed', 'numerical', 'integerOnly' => true],
            ['reservationdate, releasedate', 'safe'],
        ];
        return $this->getExtraField($rules);
    }

}
