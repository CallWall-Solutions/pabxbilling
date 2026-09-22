<?php
class Portability extends Model
{
    protected $_module = 'portability';
    /**
     * Retorna a classe estatica da model.
     * @return SubModule classe estatica da model.
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
        return 'pkg_portabilidade';
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
            ['number', 'numerical', 'integerOnly' => true],
            ['number', 'length', 'max' => 15],
            ['company', 'length', 'max' => 5],
            ['date', 'length', 'max' => 30],
        ];
        return $this->getExtraField($rules);
    }

    public function findPrefix($prefix)
    {
        $sql     = "SELECT company FROM pkg_portabilidade_prefix  WHERE number = :key ORDER BY number DESC LIMIT 1";
        $command = Yii::app()->db->createCommand($sql);
        $command->bindValue(":key", $prefix, PDO::PARAM_INT);
        return $command->queryAll();
    }
}
