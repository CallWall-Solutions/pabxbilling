<?php
class NotifyClientDailyCommand extends ConsoleCommand
{
    public function run($args)
    {

        $modelUser = User::model()->findAll([
            'condition' => 'credit_notification_daily = 1',
        ]);

        foreach ($modelUser as $user) {

            $modelSmtp = Smtps::model()->find('id_user = :key', [':key' => $user->id_user]);

            if ( ! isset($modelSmtp->id)) {
                continue;
            }

            if (strlen($user->email) > 0) {
                $mail = new Mail(Mail::$TYPE_CREDIT_DAILY, $user->id);
                try {
                    $mail->send();
                } catch (Exception $e) {
                    //error SMTP
                }

                if ($this->config['global']['admin_received_email'] == 1 && strlen($this->config['global']['admin_email'])) {
                    try {
                        $mail->send($this->config['global']['admin_email']);
                    } catch (Exception $e) {

                    }
                }

                echo ("Notifique email " . $user->email . "\n");
            }

        }
        sleep(1);
    }
}
