<?php
function solution($yourLeft, $yourRight, $friendsLeft, $friendsRight) {
    return $yourLeft + $yourRight === $friendsLeft + $friendsRight &&
    ($yourLeft === $friendsLeft || $yourRight === $friendsRight || $yourLeft === $friendsRight ||
    $yourRight === $friendsLeft);
}
?>
