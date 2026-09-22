<?php
class UserType extends Model
{
    protected $_module = 'usertype';
    /**
     * Return the static class of model.
     * @return GroupUser classe estatica da model.
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
        return 'pkg_user_type';
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
            ['name', 'required'],
            ['name', 'length', 'max' => 100],
        ];
        return $this->getExtraField($rules);
    }
}
