<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Query a Minecraft Server by TNTUP</title>

    <link href="bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript">
		$(document).ready(function() {
			$('#element_3').change(function(){ 
				if($(this).val() == "3"){
					$("input[name=size]").prop('disabled', true);
				} else {
					$("input[name=size]").prop('disabled', false);
				}
			});
		});
	</script>
    <link rel="shortcut icon" href="https://tntup.me/helm/RightAwake/16.png">

    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	
  </head>
<body>

    <div class="guest-wrapper">

      <div class="guest-logo"></div>

      <div id="notification-bar"></div>

      <div class="guest-column box">
        
<h3>Query a Minecraft Server</h3>

<hr />

<form class="form-horizontal" method="get" action="query.php" onSubmit="return submitForm($this));">

  
  <p>
    <center><label>Server IP<span class="required">*</span>:</label>
    <input type="text" name="ip" placeholder="mc.example.com" class="input-block-level-pow" value="" required="required"></center>
  </p>

  <p>
    <center><label>Server Port:</label>
    <input type="text" name="port" width=10 class="input-block-level-tnt" maxlength="5" value="25565"></center>
  
  </p>

  <div>
        <center><label>Select your prefered mode</label></center>
		<center><select class="element select medium" id="element_3" name="mode">
			<option value="1" selected="1">Mode 1</option>
                <option value="2" >Mode 2</option>
                <option value="3" >Mode 3</option>
                <option value="4" >Mode 4</option>
                <option value="5" >Mode 5</option>
                <option value="6" >Mode 6</option>
		</select>
		</center>
		<spacer></spacer>
            <center>
			    <br>
				Disable Names: <input type="checkbox" value="true" name="notext">
				<br>
				<br>
				Avatar Size: <input type="text" name="size" width="2" class="input-block-level-tnt" maxlength="3" value="128"></center>
			</center>
        
		</div>
  </div> 
  <p>
    <center><input type="submit" class="btn btn-primary" value="OK &raquo;" name=""></center>
  </p>
 
</form>

<hr />

      <div class="guest-footer">
        The server needs the <code>enable-query=true</code> to work! Or else, you'll get an error.

        Mode 5 is from <a href="http://cravatar.eu">Cravatar.eu</a> and Mode 6 is from <a href="http://achievementcraft.com">Achievementcraft.com</a></p>
	  </div>
    </div>

    <!--	
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>  
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script>
    !-->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/site.js"></script>
	<script src="js/jquery.js"></script>
    
  </body>