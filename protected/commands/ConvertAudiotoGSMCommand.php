<?php
class ConvertAudiotoGSMCommand extends ConsoleCommand
{
    private $diretory = "/usr/local/src/magnus/sounds/";

    public function run($args)
    {
        $audios = $this->scan_dir($this->diretory, 1);
        if (is_array($audios)) {

            foreach ($audios as $key => $audio) {

                echo 'Convert ' . $audio . " to GSM\n";
                LinuxAccess::exec('sox ' . $this->diretory . $audio . ' ' . $this->diretory . substr($audio, 0, -4) . '.gsm');
                unlink($this->diretory . $audio);
            }
        }

    }

    public function scan_dir($dir)
    {

        $files = [];
        foreach (scandir($dir) as $file) {
            if (substr($file, -4) != '.wav') {
                continue;
            }

            $files[$file] = filemtime($dir . '/' . $file);
        }

        arsort($files);
        $files = array_keys($files);

        return ($files) ? $files : false;
    }
}
