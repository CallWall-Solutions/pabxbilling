<?php
class Callerid extends Model
{
    protected $_module = 'callerid';
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
        return 'pkg_callerid';
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
        return [
            ['cid, id_user', 'required'],
            ['id_user', 'numerical', 'integerOnly' => true],
            ['cid, name', 'length', 'max' => 100],
            ['description', 'length', 'max' => 500],
            ['activated', 'length', 'max' => 1],
        ];
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idUser' => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }
}
