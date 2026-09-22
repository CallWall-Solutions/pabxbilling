<?php
class GroupUserGroup extends Model
{
    protected $_module = 'module';
    public $user_prefix;
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
        return 'pkg_group_user_group';
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
            ['id_group_user, id_group', 'required'],
            ['id_group_user, id_group, ', 'numerical', 'integerOnly' => true],

        ];
        return $this->getExtraField($rules);
    }
}
