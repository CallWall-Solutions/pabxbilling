<?php
class CampaignLog extends Model
{
    protected $_module = 'campaignlog';
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
        return 'pkg_campaign_log';
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
            ['total', 'required'],
            ['loops', 'numerical', 'integerOnly' => true],
            ['trunks, campaigns', 'length', 'max' => 100],
            ['date', 'length', 'max' => 50],

        ];
        return $this->getExtraField($rules);
    }
}
