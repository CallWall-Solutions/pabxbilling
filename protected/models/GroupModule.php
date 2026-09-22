<?php
class GroupModule extends Model
{
    protected $_module = 'module';

    /**
     * Return the static class of model.
     *
     * @return GroupModule classe estatica da model.
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     *
     *
     * @return name of table.
     */
    public function tableName()
    {
        return 'pkg_group_module';
    }

    /**
     *
     *
     * @return name of primary key(s).
     */
    public function primaryKey()
    {
        return ['id_group', 'id_module'];
    }

    /**
     *
     *
     * @return array validation of fields of model.
     */
    public function rules()
    {
        $rules = [
            ['id_group, id_module', 'required'],
            ['id_group, id_module, show_menu, createShortCut, createQuickStart', 'numerical', 'integerOnly' => true],
            ['action', 'length', 'max' => 5],
        ];
        return $this->getExtraField($rules);
    }

    /**
     *
     *
     * @return array roles of relationship.
     */
    public function relations()
    {
        return [
            'idGroup'  => [self::BELONGS_TO, 'GroupUser', 'id_group'],
            'idModule' => [self::BELONGS_TO, 'Module', 'id_module'],
        ];
    }

    public function getGroupModule($id_group, $isClient, $id_user)
    {
        if ($isClient) {
            $sql = "(SELECT m.id, action, show_menu, text, module, icon_cls, m.id_module, gm.createShortCut, gm.createQuickStart, priority
                    FROM pkg_group_module gm
                    INNER JOIN pkg_module m ON gm.id_module = m.id
                    WHERE id_group = :id_group)
                UNION
                    (
                        SELECT m.id, action, show_menu, text, module, icon_cls, m.id_module, gm.createShortCut, gm.createQuickStart, priority
                        FROM pkg_services_module gm
                        INNER JOIN pkg_module m ON gm.id_module = m.id
                        WHERE gm.id_services IN (
                            SELECT id_services FROM pkg_services_use WHERE id_user = :id_user AND status = 1
                            )
                    )
                 ORDER BY priority";
            $command = Yii::app()->db->createCommand($sql);
            $command->bindValue(":id_group", $id_group, PDO::PARAM_INT);
            $command->bindValue(":id_user", $id_user, PDO::PARAM_INT);
            $result = $command->queryAll();
            //remove duplicate on permissions
            $result = Util::unique_multidim_array($result, 'id');
        } else {

            $sql = "SELECT m.id, action, show_menu, text, module, icon_cls, m.id_module, gm.createShortCut,
                                    gm.createQuickStart FROM pkg_group_module gm
                                    INNER JOIN pkg_module m ON gm.id_module = m.id
                                    WHERE id_group = :id_group ORDER BY priority";
            $command = Yii::app()->db->createCommand($sql);
            $command->bindValue(":id_group", $id_group, PDO::PARAM_STR);
            $result = $command->queryAll();
        }
        return $result;
    }
}
