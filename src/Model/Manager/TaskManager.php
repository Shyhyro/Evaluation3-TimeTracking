<?php

namespace Shyhyro\Timetracking\Model\Manager;

use Shyhyro\Timetracking\Model\Classe\Database;
use Shyhyro\Timetracking\Model\Entity\Task;

class TaskManager
{
    public function getAllTask($cardId): ?array
    {
        $array = [];
        $stmt = Database::getInstance()->prepare("SELECT * FROM task WHERE card = :cardId");
        $stmt->bindValue(":cardId", $cardId);

        if($stmt->execute() && $taskDatas = $stmt->fetchAll()) {
            foreach ($taskDatas as $taskData) {
                $array[] = new Task($taskData['id'], $taskData['card'], $taskData['name'], $taskData['time']);
            }
        }
        return $array;
    }
}