<?php
class OfferUse extends Model
{
    protected $_module = 'offeruse';
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
        return 'pkg_offer_use';
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
            ['id_user, id_offer, status, month_payed, reminded', 'numerical', 'integerOnly' => true],
            ['reservationdate, releasedate', 'length', 'max' => 70],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idOffer' => [self::BELONGS_TO, 'Offer', 'id_offer'],
            'idUser'  => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }
}
