<?php
class CampaignPollInfo extends Model
{
    protected $_module = 'campaignpollinfo';
    public $sumresposta;
    public $resposta2;
    public $resposta_name;
    public $percentage;
    public $total_votos;
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
        return 'pkg_campaign_poll_info';
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
            ['id_campaign_poll', 'numerical', 'integerOnly' => true],
            ['number', 'length', 'max' => 18],
            ['obs, resposta', 'length', 'max' => 200],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idCampaignPoll' => [self::BELONGS_TO, 'CampaignPoll', 'id_campaign_poll'],
        ];
    }
}
