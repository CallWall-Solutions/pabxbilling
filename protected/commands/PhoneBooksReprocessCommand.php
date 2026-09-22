<?php
class PhoneBooksReprocessCommand extends ConsoleCommand
{
    public function run($args)
    {
        $modelCampaign = Campaign::model()->findAll('status = 1 AND auto_reprocess = 1');
        foreach ($modelCampaign as $key => $campaign) {

            $modelCampaignPhonebook = CampaignPhonebook::model()->findAll('id_campaign = :key', [':key' => $campaign->id]);

            if ( ! isset($modelCampaignPhonebook[0]->id_phonebook)) {
                continue;
            }

            $ids_phone_books = '';
            foreach ($modelCampaignPhonebook as $key => $phonebook) {
                $ids_phone_books .= $phonebook->id_phonebook . ',';
            }
            $ids_phone_books = substr($ids_phone_books, 0, -1);

            $sql              = "SELECT * FROM `pkg_phonenumber` WHERE status = 1 AND id_phonebook IN ($ids_phone_books)";
            $modelPhoneNumber = PhoneNumber::model()->findBySql($sql);
            if (isset($modelPhoneNumber->id)) {
                continue;
            }
            echo "REPROCESSAR IDS " . $ids_phone_books . "\n";

            $ids_phone_books = explode(',', $ids_phone_books);

            $criteria = new CDbCriteria;
            $criteria->addInCondition('id_phonebook', $ids_phone_books);
            $criteria->addCondition('status = 2');
            PhoneNumber::model()->updateAll(['status' => 1, 'try' => 0], $criteria);
        }
    }
}
