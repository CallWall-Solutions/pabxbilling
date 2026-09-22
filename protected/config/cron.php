<?php
$configFile = '/etc/asterisk/res_config_mysql.conf';
$array      = parse_ini_file($configFile);
return [
    'basePath'       => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name'           => 'cron',
    'preload'        => ['log'],
    'language'       => 'en',
    'sourceLanguage' => 'en',
    'import'         => [
        'application.models.*',
        'application.components.*',
        'application.components.AGI.*',
        'ext.yii-mail.YiiMailMessage',
        'ext.phpAGI.AGI',
        'ext.phpAGI.AGI_AsteriskManager',
        'ext.fpdf.FPDF',
    ],
    'components'     => [
        'mail'         => [
            'class'            => 'ext.yii-mail.YiiMail',
            'transportType'    => 'smtp',
            'transportOptions' => [
                'host'       => '',
                'encryption' => '',
                'username'   => '',
                'password'   => '',
                'port'       => '',
                'encryption' => '',
            ],
            'viewPath'         => 'application.views.mails',
            'logging'          => true,
            'dryRun'           => false,
        ],
        'db'           => [
            'connectionString' => 'mysql:host=' . $array['dbhost'] . ';dbname=' . $array['dbname'] . '',
            'emulatePrepare'   => true,
            'username'         => $array['dbuser'],
            'password'         => $array['dbpass'],
            'charset'          => 'utf8',
            'attributes'       => [
                PDO::MYSQL_ATTR_LOCAL_INFILE => true,
            ],
        ],
        'coreMessages' => [
            'basePath' => 'locale/php',
        ],
        'log'          => [
            'class'  => 'CLogRouter',
            'routes' => [
                [
                    'class'   => 'CFileLogRoute',
                    'logFile' => 'cron.log',
                    'levels'  => 'error, fatal',
                ],
            ],
        ],
        'cache'        => [
            'class' => 'system.caching.CDbCache',
        ],
    ],
];
