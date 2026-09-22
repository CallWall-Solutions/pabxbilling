<?php
class ServersServers extends Model
{
    protected $_module = 'serversservers';
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
        return 'pkg_servers_servers';
    }

    /**
     * @return nome da(s) chave(s) primaria(s).
     */
    public function primaryKey()
    {
        return ['id_proxy', 'id_server'];
    }

    /**
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['id_proxy, id_server', 'required'],
            ['id_proxy, id_server', 'numerical', 'integerOnly' => true],
        ];
        return $this->getExtraField($rules);
    }

    public function beforeSave()
    {
        return parent::beforeSave();
    }

    public function afterSave()
    {
        return parent::afterSave();
    }
}
