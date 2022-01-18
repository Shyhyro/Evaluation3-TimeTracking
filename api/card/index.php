<?php

use Shyhyro\Timetracking\Model\Manager\CardManager;

header('Content-Type: application/json');

$requestType = $_SERVER['REQUEST_METHOD'];
$manager = new CardManager();

switch($requestType) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        if(isset($_SESSION['id'])) {
            $user_fk = $_SESSION['id'];
            $manager->getAllCard($user_fk, addslashes($data->content));
        }
        break;
    case "GET":
        echo getCard($manager);
        break;
    default:
        break;
}

/* Get message */
function getCard($manager) {
    $reponse = [];

    foreach ($manager->getAllCard() as $card) {
        $reponse[] = [
            "id" => $card->getId(),
            "name" => $card->getName(),
            "time" => $card->getTime(),
        ];
    }
    return json_encode($reponse);
}