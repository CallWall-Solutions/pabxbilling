<?php
class GAuthenticator extends Model
{
    protected $_module = 'user';
    /**
     * Retorna a classe estatica da model.
     *
     * @return Prefix classe estatica da model.
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     *
     *
     * @return nome da tabela.
     */
    public function tableName()
    {
        return 'pkg_user';
    }

    /**
     *
     *
     * @return nome da(s) chave(s) primaria(s).
     */
    public function primaryKey()
    {
        return 'id';
    }

    /**
     *
     *
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['googleAuthenticator_enable', 'numerical', 'integerOnly' => true],
            ['google_authenticator_key', 'length', 'max' => 50],
        ];
        return $this->getExtraField($rules);
    }
}
