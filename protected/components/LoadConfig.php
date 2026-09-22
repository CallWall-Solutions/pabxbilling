<?php
class Loadconfig
{
    public static function getConfig()
    {
        $modelConfiguration = Configuration::model()->findAll();

        $config = [];
        foreach ($modelConfiguration as $conf) {
            $config[$conf->config_group_title][$conf->config_key] = $conf->config_value;
        }

        return $config;
    }
}
