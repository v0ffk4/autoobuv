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

<!-- change backgroud on category page
<?php if (!isset($this->request->get['route']) || (isset($this->request->get['route']) && $this->request->get['route'] == 'custom/category')) { ?>

	<style type="text/css">
		body {
			background-color: red;
		}
	</style>

<?php } ?>
-->

</head>

<body class="<?php echo $class; ?>">

	<header>
		
		<div class="header-bcg">
			
		</div>
		<!-- /.header-bcg -->

		<div class="header-content">
			<a class="logo" href="http://localhost:8888/">
				<img class="logo" src="catalog/view/theme/autoobuv/image/logo.svg">
			</a>

			<nav class="nav-main">
				<ul>
					<li><a href="http://localhost:8888/index.php?route=custom/about">О нас</a></li>
					<li><a href="http://localhost:8888/index.php?route=custom/category">Товары</a></li>
					<li><a href="http://localhost:8888/index.php?route=custom/item">Услуги</a></li>
					<li><a href="#">Сервис</a></li>
					<li><a href="http://localhost:8888/index.php?route=custom/contacts">Контакты</a></li>
				</ul>
			</nav>
			<!-- /.nav-main -->
			
			<!-- js for catalogue button -->
			<script type="text/javascript">
				var catMenuItem = document.getElementsByClassName('nav-main')[0].getElementsByTagName('a')[1];
				catMenuItem.className += "cat-menu-item";
			</script>

			<div class="header-contact-info">
				<p><img src="catalog/view/theme/autoobuv/image/icon-header-phone.svg">8-800-250-57-07</p>

				<a>обратный звонок</a>
			</div>
			<!-- /.header-contact-info -->

		</div>
		<!-- /.header-content -->
		
	</header>

	<div id="callback">
		<form>
			<fieldset>
				<label>Вас зовут:</label>
				<input type="text" name="callback-name">
			</fieldset>
			<fieldset>
				<label>Ваш номер телефона:</label>
				<input type="text" name="callback-name">
			</fieldset>
			<fieldset>
				<label>Вам удобнее говорить:</label>
				<div>
					<span>c</span>
					<select>
						<option value="volvo">9:00 </option>
						<option value="saab">11:00</option>
						<option value="mercedes">13:00</option>
						<option value="audi">15:00</option>
					</select>
					<span>до</span>
					<select>
						<option value="volvo">13:00</option>
						<option value="volvo">15:00</option>
						<option value="saab">17:00</option>
						<option value="mercedes">19:00</option>
						<option value="audi">15:00</option>
					</select>
				</div>
			</fieldset>
			<button>Мы вам перезвоним</button>
		</form>				
	</div>
	<!-- /#callback -->
	
	<!-- wrapper is closed in footer.tpl -->
	<div class="wrapper">

