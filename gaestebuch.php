<?php
/**
 * Created by PhpStorm.
 * User: typo3support
 * Date: 09.05.14
 * Time: 10:52
 */

if(isset($_GET) && isset($_GET['vorname']) && isset($_GET['nachname']) && isset($_GET['text'])){
    $formularDaten = $_GET;

    $vorname = $formularDaten['vorname'];
    $nachname = $formularDaten['nachname'];
    $text = $formularDaten['text'];
}





ob_start();
include __DIR__ . '/gaestebuch.phtml';
ob_get_contents();
