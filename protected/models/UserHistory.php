<?php
class UserHistory extends Model
{
    protected $_module = 'userhistory';
    public $sumCredit;
    public $sumCreditMonth;
    public $CreditMonth;
    /**
     * Retorna a classe estatica da model.
     * @return Admin classe estatica da model.
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
        return 'pkg_user_history';
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
            ['date', 'length', 'max' => 20],
            ['description', 'length', 'max' => 1000],

        ];
        return $this->getExtraField($rules);
    }
    /*
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idUser' => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }

}
