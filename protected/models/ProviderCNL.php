<?php
class ProviderCNL extends Model
{
    protected $_module = 'providercnl';
    /**
     * Retorna a classe estatica da model.
     * @return Provider classe estatica da model.
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
        return 'pkg_provider_cnl';
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
            ['id_provider, cnl,zone', 'required'],
            ['zone, cnl', 'length', 'max' => 11],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idProvider' => [self::BELONGS_TO, 'Provider', 'id_provider'],
        ];
    }

    public function beforeSave()
    {
        $this->zone = strtoupper($this->zone);
        return parent::beforeSave();
    }

}
