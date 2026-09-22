<?php
class Balance extends Model
{

    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return nome da tabela.
     */
    public function tableName()
    {
        return 'pkg_balance';
    }

    /**
     * @return array validacao dos campos da model.
     */
    public function rules()
    {
        $rules = [
            ['last_use,id_prefix', 'numerical', 'integerOnly' => true],

        ];
        return $this->getExtraField($rules);
    }
}
