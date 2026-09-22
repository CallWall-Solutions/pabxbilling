<?php
class DidUse extends Model
{
    protected $_module = 'diduse';
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
        return 'pkg_did_use';
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
            ['id_user, id_did, status, month_payed, reminded', 'numerical', 'integerOnly' => true],
            ['reservationdate, releasedate,next_due_date', 'safe'],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idDid'  => [self::BELONGS_TO, 'Did', 'id_did'],
            'idUser' => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }
}
