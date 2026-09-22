<?php
class UserTypeController extends Controller
{
    public $attributeOrder = 't.id';

    public function init()
    {
        $this->instanceModel = new UserType;
        $this->abstractModel = UserType::model();
        parent::init();
    }
}
