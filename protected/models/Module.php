<?php
class Module extends Model
{
    protected $_module = 'module';
    /**
     * Return the static class of model.
     * @return Module classe estatica da model.
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return name of table.
     */
    public function tableName()
    {
        return 'pkg_module';
    }

    /**
     * @return name of primary key(s).
     */
    public function primaryKey()
    {
        return 'id';
    }

    /**
     * @return array validation of fields of model.
     */
    public function rules()
    {
        $rules = [
            ['text', 'required'],
            ['id_module,priority', 'numerical', 'integerOnly' => true],
            ['text, icon_cls', 'length', 'max' => 100],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array roles of relationship.
     */
    public function relations()
    {
        return [
            'groupUsers'   => [self::MANY_MANY, 'GroupUser', 'group_module(id_module, id_group)'],
            'groupModules' => [self::HAS_MANY, 'GroupModule', 'id_module'],
            'idModule'     => [self::BELONGS_TO, 'Module', 'id_module'],
            'modules'      => [self::HAS_MANY, 'Module', 'id_module'],
            'idUserType'   => [self::BELONGS_TO, 'UserType', 'id_user_type'],
        ];
    }
}
