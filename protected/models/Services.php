<?php
class Services extends Model
{
    protected $_module = 'services';
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
        return 'pkg_services';
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
            ['name, price', 'required'],
            ['status,disk_space,sipaccountlimit,calllimit,return_credit', 'numerical', 'integerOnly' => true],
            ['description', 'length', 'min' => 1],
            ['type', 'length', 'max' => 50],
        ];
        return $this->getExtraField($rules);
    }
    /**
     * @return array roles of relationship.
     */
    public function relations()
    {
        return [
            'modules'      => [self::MANY_MANY, 'Module', 'group_module(id_group, id_module)'],
            'groupModules' => [self::HAS_MANY, 'GroupModule', 'id_group'],
        ];
    }
}
