<?php

class Cryptocurrency extends Model
{
    protected $_module = 'cryptocurrency';

    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return nome da tabela.
     */
    public function tableName()
    {
        return 'pkg_cryptocurrency';
    }

    /**
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['id_user,status', 'numerical', 'integerOnly' => true],
            ['amountCrypto,amount', 'numerical', 'integerOnly' => false],
            ['amountCrypto,amount', 'length', 'max' => 10],
            ['date, expirationdate', 'safe'],
            ['network', 'length', 'max' => 100],

        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idUser' => [self::BELONGS_TO, 'User', 'id_user'],
        ];
    }
}
