<?php
class CallSummaryPerTrunk extends Model
{
    protected $_module = 'callsummarypertrunk';

    public $sumsessionbill;
    public $sumbuycost;
    public $sumlucro;
    public $sumaloc_all_calls;
    public $sumnbcall;
    public $sumasr;
    public $sumnbcallfail;
    public $sumsessiontime;

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
        return 'pkg_cdr_summary_trunk';
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
            ['id_trunk', 'numerical', 'integerOnly' => true],
            ['sessiontime, sessionbill, nbcall, buycost, lucro, aloc_all_calls, sumaloc_all_calls', 'length', 'max' => 50],
        ];
        return $this->getExtraField($rules);
    }
    public function relations()
    {
        return [
            'idTrunk' => [self::BELONGS_TO, 'Trunk', 'id_trunk'],
        ];
    }

}
