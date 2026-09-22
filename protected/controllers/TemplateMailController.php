<?php
class TemplateMailController extends Controller
{
    public $attributeOrder = 't.language, t.mailtype';

    public function init()
    {

        $this->instanceModel = new TemplateMail;
        $this->abstractModel = TemplateMail::model();
        $this->titleReport   = Yii::t('zii', 'Emails');

        if (Yii::app()->session['isAdmin']) {
            $this->relationFilter['idUser'] = [
                'condition' => "idUser.id  = 1",
            ];

            parent::init();

        }

    }

    public function extraFilterCustomAgent($filter)
    {
        //se é agente filtrar pelo user.id_user

        $this->relationFilter['idUser'] = [
            'condition' => "idUser.id LIKE :agfby",
        ];

        $this->paramsFilter[':agfby'] = Yii::app()->session['id_user'];

        return $filter;
    }

}
