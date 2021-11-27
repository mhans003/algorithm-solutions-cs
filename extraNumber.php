<?php
function solution($a, $b, $c) {
    //PHP ternary operation requires parentheses around the nested operation.
    return $a === $b ? $c : ($a === $c ? $b : $a);
}
?>