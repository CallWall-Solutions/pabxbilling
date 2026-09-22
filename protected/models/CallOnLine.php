<?php

class CallOnLine extends Model
{
    protected $_module = 'callonline';
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
        return 'pkg_call_online';
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
            ['id_user', 'numerical', 'integerOnly' => true],
            ['canal, tronco, from_ip, sip_account, callerid', 'length', 'max' => 50],
            ['ndiscado, status, duration', 'length', 'max' => 16],
            ['codec, reinvite', 'length', 'max' => 5],
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

    public function insertCalls($sql)
    {

        $sql = 'INSERT INTO pkg_call_online VALUES ' . implode(',', $sql) . ';';
        try {
            return Yii::app()->db->createCommand($sql)->execute();
        } catch (Exception $e) {
            return $e;
        }
    }
}
