<?php
class ServicesModule extends Model
{
    protected $_module = 'groupmodule';

    /**
     * Return the static class of model.
     *
     * @return GroupModule classe estatica da model.
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
        return 'pkg_services_module';
    }

    /**
     *
     *
     * @return name of primary key(s).
     */
    public function primaryKey()
    {
        return ['id_services', 'id_module'];
    }

    /**
     *
     *
     * @return array validation of fields of model.
     */
    public function rules()
    {
        $rules = [
            ['id_services, id_module', 'required'],
            ['id_services, id_module, show_menu', 'numerical', 'integerOnly' => true],
            ['action', 'length', 'max' => 5],
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
            'idModule' => [self::BELONGS_TO, 'Module', 'id_module'],
        ];
    }
}
