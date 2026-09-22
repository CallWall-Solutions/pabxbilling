<?php
class TrunkGroupTrunk extends Model
{
    protected $_module = 'trunkgrouptrunk';
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
        return 'pkg_trunk_group_trunk';
    }

    /**
     * @return nome da(s) chave(s) primaria(s).
     */
    public function primaryKey()
    {
        return ['id', 'id_trunk_group', 'id_trunk'];
    }

    /**
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['id_trunk_group, id_trunk', 'required'],
            ['id_trunk_group, id_trunk', 'numerical', 'integerOnly' => true],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idTrunk'      => [self::BELONGS_TO, 'Trunk', 'id_trunk'],
            'idTrunkGroup' => [self::BELONGS_TO, 'TrunkGroup', 'id_trunk_group'],
        ];
    }
}
