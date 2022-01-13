<?php

namespace Shyhyro\Timetracking\Model\Manager;

use Shyhyro\Timetracking\Model\Classe\Database;
use Shyhyro\Timetracking\Model\Entity\Card;

class CardManager
{
    public function getAllCard(): ?array
    {
        $array = [];
        $stmt = Database::getInstance()->prepare("SELECT * FROM card");

        if($stmt->execute() && $cardDatas = $stmt->fetchAll()) {
            foreach ($cardDatas as $cardData) {
                $array[] = new Card($cardData['id'], $cardData['name'], $cardData['time']);
            }
        }
        return $array;
    }
}