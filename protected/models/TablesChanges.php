<?php
class TablesChanges extends Model
{
    protected $_module = 'user';
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
        return 'pkg_tables_changes';
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
            ['module', 'required'],
            ['last_time', 'numerical', 'integerOnly' => true],
        ];
        return $this->getExtraField($rules);
    }
    public function lastTime($table)
    {
        return new CDbCacheDependency('SELECT MAX(last_time) FROM pkg_tables_changes WHERE module = "' . $table . '"');
    }
}
