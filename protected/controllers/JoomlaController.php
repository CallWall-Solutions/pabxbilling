<?php

class JoomlaController extends Controller
{
    private $menu = [];

    public function actionIndex()
    {
        $this->render('index');
    }
}
