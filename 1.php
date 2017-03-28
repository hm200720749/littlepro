<?php
//echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
$data = [
    ['name' => '名字', 'age' => '188','id'=>'1'],
    ['name' => '爱丽丝', 'age' => '12188','id'=>'2'],
    ['name' => '爱213丽丝', 'age' => '12188','id'=>'3'],
    ['name' => '爱123丽丝', 'age' => '12188','id'=>'4'],
    ['name' => '爱1丽123丝', 'age' => '12188','id'=>'5'],
    ['name' => '爱2丽123丝', 'age' => '12188','id'=>'6'],
];
echo json_encode($data,JSON_UNESCAPED_UNICODE);
//echo '<br>';
//echo json_encode($data);