<?php
class GroupUser extends Model
{
    protected $_module = 'groupuser';

    /**
     * Return the static class of model.
     *
     * @return GroupUser classe estatica da model.
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     *
     *
     * @return name of table.
     */
    public function tableName()
    {
        return 'pkg_group_user';
    }

    /**
     *
     *
     * @return name of primary key(s).
     */
    public function primaryKey()
    {
        return 'id';
    }

    /**
     *
     *
     * @return array validation of fields of model.
     */
    public function rules()
    {
        $rules = [
            ['name', 'required'],
            ['id_user_type, hidden_prices, hidden_batch_update', 'numerical', 'integerOnly' => true],
            ['name', 'length', 'max' => 100],
            ['user_prefix', 'length', 'max' => 6],
        ];
        return $this->getExtraField($rules);
    }

    /**
     *
     *
     * @return array roles of relationship.
     */
    public function relations()
    {
        return [
            'modules'      => [self::MANY_MANY, 'Module', 'group_module(id_group, id_module)'],
            'groupModules' => [self::HAS_MANY, 'GroupModule', 'id_group'],
            'users'        => [self::HAS_MANY, 'User', 'id_group'],
            'idUserType'   => [self::BELONGS_TO, 'UserType', 'id_user_type'],
        ];
    }
}
