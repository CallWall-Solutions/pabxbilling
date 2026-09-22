<?php
class TemplateMail extends Model
{
    protected $_module = 'templatemail';
    /**
     * Retorna a classe estatica da model.
     * @return TemplateMail classe estatica da model.
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
        return 'pkg_templatemail';
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
            ['id_user,status', 'numerical', 'integerOnly' => true],
            ['mailtype', 'length', 'max' => 50],
            ['fromname, fromemail, language', 'length', 'max' => 70],
            ['subject', 'length', 'max' => 130],
            ['messagehtml', 'length', 'max' => 3000],
        ];
        return $this->getExtraField($rules);
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
