<?php
class CallOnlineChart extends Model
{
    protected $_module = 'callerid';
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
        return 'pkg_call_chart';
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
            ['total', 'numerical', 'integerOnly' => true],
            ['date, answer', 'length', 'max' => 100],
        ];

        $rules = $this->getExtraField($rules);

        return $rules;
    }

    public function updateCall()
    {
        $sql = "UPDATE pkg_call_chart SET total = total + 1 WHERE date > '" . date('Y-m-d H:i') . "' ";
        try {
            Yii::app()->db->createCommand($sql)->execute();
        } catch (Exception $e) {
            //
        }
    }
}
