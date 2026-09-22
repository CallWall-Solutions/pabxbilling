<?php
class SearchTariff
{

    public function find($destination, $id_plan, $id_user, $agi = null)
    {

        if (is_null($agi)) {
            $agi = $this;
        }

        if (file_exists(dirname(__FILE__) . '/beforeSearchTariff.php')) {
            include dirname(__FILE__) . '/beforeSearchTariff.php';
        }

        $result = Plan::model()->searchTariff($id_plan, $destination);
        $agi->verbose($result[0], 25);
        $result = $result[1];

        if ( ! is_array($result) || count($result) == 0) {
            return 0;
        }

        //Select custom rate to user
        $modelUserRate = UserRate::model()->find('id_prefix = :key AND id_user = :key1', [
            ':key'  => $result[0]['id_prefix'],
            ':key1' => $id_user,
        ]);

        //change custom rate to user
        if (isset($modelUserRate->id)) {
            $result[0]['rateinitial']  = $modelUserRate->rateinitial;
            $result[0]['initblock']    = $modelUserRate->initblock;
            $result[0]['billingblock'] = $modelUserRate->billingblock;
        }

        if (file_exists(dirname(__FILE__) . '/AfterSearchTariff.php')) {
            include dirname(__FILE__) . '/AfterSearchTariff.php';
        }

        return $result;

    }

    public function verbose($message, $level = 0)
    {
        if ($level >= 30) {
            echo $message . "<br>";
        }

    }

}
