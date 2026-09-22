<?php

class MagnusSentinelIncident extends Model
{
    protected $_module = 'trunk';

    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    public function tableName()
    {
        return 'pkg_magnus_sentinel_incident';
    }

    public function primaryKey()
    {
        return 'id';
    }

    public function rules()
    {
        return [];
    }
}
