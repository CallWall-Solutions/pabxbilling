<?php
class Process
{

    public static function isActive()
    {
        $pid = Process::getPID();
        if ( ! is_dir('/var/run/magnus/')) {

            if (mkdir('/var/run/magnus/', 0755, true)) {
                echo "Diretório criado com sucesso: /var/run/magnus/.";
            }
        }
        if ($pid == null) {
            $ret = false;
        } else {
            $ret = posix_kill($pid, 0);
        }

        if ($ret == false) {
            Process::activate();
        }

        return $ret;
    }

    public static function activate()
    {
        $pidfile = PID;
        $pid     = Process::getPID();

        if ($pid != null && $pid == getmypid()) {
            return "Already running!\n";
        } else {
            $fp = fopen($pidfile, "w+");
            if ($fp) {
                if ( ! fwrite($fp, "<" . "?php\n\$pid = " . getmypid() . ";\n?" . ">")) {
                    die("Can not create pid file!\n");
                }

                fclose($fp);
            } else {
                die("Can not create pid file!\n");
            }
        }
    }

    public static function getPID()
    {
        if (file_exists(PID)) {
            require PID;
            return $pid;
        } else {
            return null;
        }
    }
}
