<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $score = intval($_POST['score']);
    $data = json_decode(file_get_contents('scores.json'), true);

    if ($data === null) {
        $data = [];
    }

    $data[] = $score;
    file_put_contents('scores.json', json_encode($data));

    echo json_encode(["message" => "Score saved successfully!"]);
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $saveData = json_encode($data);
    file_put_contents('save_game.json', $saveData);
    echo json_encode(['message' => 'Game saved successfully!']);
}
