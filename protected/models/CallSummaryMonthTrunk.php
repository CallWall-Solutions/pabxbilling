<?php
class CallSummaryMonthTrunk extends Model
{
    protected $_module = 'callsummarymonthtrunk';

    public $sumsessiontime;
    public $sumsessionbill;
    public $sumbuycost;
    public $sumlucro;
    public $sumaloc_all_calls;
    public $sumnbcall;
    public $sumasr;

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
        return 'pkg_cdr_summary_month_trunk';
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
            ['sessiontime,day, id_trunk, sessionbill, nbcall, buycost, lucro, aloc_all_calls, sumaloc_all_calls, nbcall_fail, asr', 'length', 'max' => 50],
        ];
        return $this->getExtraField($rules);
    }

    /**
     * @return array regras de relacionamento.
     */
    public function relations()
    {
        return [
            'idTrunk' => [self::BELONGS_TO, 'Trunk', 'id_trunk'],
        ];
    }

}
