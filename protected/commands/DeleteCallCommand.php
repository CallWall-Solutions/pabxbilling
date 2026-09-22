<?php
class DeleteCallCommand extends ConsoleCommand
{
    public function run($args)
    {
        ini_set('memory_limit', '-1');
        $backdate = $this->subDayIntoDate(date('Ymd'), 15);

        Call::model()->deleteAll([
            'condition' => 'sessiontime = 0 AND  starttime < :key',
            'params'    => [':key' => $backdate],
            'limit'     => 1000,
        ]);
    }

    public function subDayIntoDate($date, $days)
    {
        $thisyear  = substr($date, 0, 4);
        $thismonth = substr($date, 4, 2);
        $thisday   = substr($date, 6, 2);
        $nextdate  = mktime(0, 0, 0, $thismonth, $thisday - $days, $thisyear);
        return strftime("%Y-%m-%d", $nextdate);
    }
}
