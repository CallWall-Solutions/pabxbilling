<?php
    ?>
<div id="load" ><?php echo Yii::t('zii', 'Please wait while loading...') ?></div>

<?php
    if (Yii::app()->session['currency'] == 'U$S') {
        $currency = 'USD';
    } else if (Yii::app()->session['currency'] == 'R$') {
        $currency = 'BRL';
    } elseif (Yii::app()->session['currency'] == '€') {
        $currency = 'EUR';
    } else {
        $currency = 'USD';
    }

?>

<?php
    require_once 'lib/mercadopago/mercadopago.php';

    $mp = new MP($modelMethodPay->username, $modelMethodPay->pagseguro_TOKEN);

    $preference_data = [
        "items" => [
            [
                "title"       => $reference,
                "quantity"    => 1,
                "currency_id" => $currency,
                "unit_price"  => floatval($_GET['amount']),
            ],
        ],
    ];

    $preference = $mp->create_preference($preference_data);
?>
<script type="text/javascript">
    window.location.href = '<?php echo $preference['response']['init_point']; ?>';
</script>
<div id="load" >
    <a id='link' href="<?php echo $preference['response']['init_point']; ?>">
        <?php echo Yii::t('zii', 'Pay Now') ?>
    </a>

</div>