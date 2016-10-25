<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $title; ?></title>
<base href="<?php echo $base; ?>" />

<?php if ($description) { ?>
	<meta name="description" content="<?php echo $description; ?>" />
<?php } ?>

<?php if ($keywords) { ?>
	<meta name="keywords" content= "<?php echo $keywords; ?>" />
<?php } ?>

<link href="catalog/view/theme/autoobuv/stylesheet/stylesheet.css" rel="stylesheet">

</head>

<body class="<?php echo $class; ?>">

	<header>
		<img class="logo" src="catalog/view/theme/autoobuv/image/logo.svg">

		<nav class="nav-main">
			<ul>
				<li><a href="#">Товары</a></li>
				<li><a href="#">Услуги</a></li>
				<li><a href="#">Сервис</a></li>
				<li><a href="#">Контакты</a></li>
			</ul>
		</nav>
		<!-- /.nav-main -->

		<script type="text/javascript">
			document.getElementsByClassName('nav-main')[0].getElementsByTagName('li')[0].className += "cat-menu-item";
			alert(a);
		</script>
		

	</header>

