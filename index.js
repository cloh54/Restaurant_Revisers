<!DOCTYPE html>
<div id = "centerwrap">
<html>
    <head>
	   <link rel="stylesheet" type="text/css" href="indexstyle.css">
    </head>

    <body>
        <input type="button" id="dark" value="Dark Mode">
        <h1 class="changeGreen">Restaurant Revisers</h1>
        <h3 class="changeGreen">Fill out info on your restaurant: </h3>
        <form target="_blank">
            <label class="changeGreen" for="rname">Name of restaurant:</label><br>
            <input type="text" class="changeBox" id="rname"><br>
            <label for="rdesc" class="changeGreen">Description of restaurant:</label><br>
            <input type="text" id="rdesc" class="changeBox" name="rdesc"><br>
	    <div id="address">
            	<label class="changeGreen" for="addr">Address:</label><br>
            	<input type="text" class="changeBox" id="addr" name="addr"><br>
	    </div>
	    <div id="city-state-zip">
            	<label class="changeGreen" for="csz">City, State, Zip:</label><br>
            	<input type="text" id="csz" class="changeBox"><br>
	    </div>
	    <div id="phone-number">
            	<label class="changeGreen" for="pnum">Phone number:</label><br>
            	<input type="text" id="pnum" class="changeBox"><br>
	    </div>
	    <div id="email-address">
            	<label class="changeGreen" for="email">E-mail:</label><br>
            	<input type="text" id="email" class="changeBox"><br>
	    </div>
	    <div id="add-img">
            	<label class="changeGreen" for="img">Add images of restuarant:</label>
	    </div>
            <input type="file" id="img" class="changeWhite" accept="image/*">
            <input type="file" id="img1" class="changeWhite" accept="image/*">
            <input type="file" id="img2" class="changeWhite" accept="image/*">
            <input type="button" id="imgb" value="Upload more images">
            <div class="container">
		<div id="menu-title">
                	<h3 class="changeGreen">Fill out info on your menu:</h3>
                </div>
                <div class="container">
		    <div id="section">
                    	<label class="changeGreen" for="sec">Section of Menu (ex. Apps, Main. etc.):</label><br>
                   	 <input type="text" id="sec" class="changeBox"><br>
		    </div>
                    <div class="container">
			<div id="dish-name">
                        	<label class="changeGreen" for="dname">Dish name:</label><br>
                        	<input type="text" id="dname" class="changeBox"><br>
			</div>
			<div id="price-input">
                        	<label class="changeGreen" for="price">Price:</label><br>
                        	<input type="text" id="price" class="changeBox"><br>
			</div>
			<div id="dish-desc">
                        	<label class="changeGreen" for="ddesc">(optional) dish description:</label><br>
                        	<input type="text" id="ddesc" class="changeBox"><br>
			</div>
			<div id="dish-pic">
                        	<label class="changeGreen" for="dimg">(optional) picture of dish:</label>
                        	<input type="file" id="dimg" class="changeWhite" accept="image/*">
			</div>
                    </div>
                    <input type="button" id="add-dish" value="Add another dish">

                </div>
                <input type="button" id="sec-button" value="Add another section to menu">
            </div>

            <div class="socials">
                <h3 class="changeGreen">Fill out info on any social media you'd like to link to: </h3>
                <label class="changeGreen" for="yelp">Yelp page link:</label><br>
                <input type="text" id="yelp" class="changeBox"><br>
                <label class="changeGreen" for="fbook">Facebook page link:</label><br>
                <input type="text" id="fbook" class="changeBox"><br>
                <label class="changeGreen" for="googbiz">Google Business page link:</label><br>
                <input type="text" id="googbiz" class="changeBox"><br>
            <br><br>
            <div class="style">
                <h3 class="changeGreen">Style Your Website</h3>
                <label class="changeGreen">Background Color: </label><input type=color id="bcolor"><br>
                <label class="changeGreen">Text Color: </label><input type=color id="tcolor"><br>
                <label class="changeGreen">Navigation-Bar Color: </label><input type=color id=nbcolor><br>
                <label class="changeGreen">Navigation-Bar Text Color</label><input type=color id=nbtcolor><br>
                <label class="changeGreen">Title Font: </label>
                <select name = "fonts" id="tFont">
                    <option>Arial</option>
                    <option>Helvetica</option>
                    <option>Verdana</option>
                    <option>Geneva</option>
                    <option>Tahoma</option>
                    <option>Trebuchet MS</option>
                </select><br>
                <label class="changeGreen">Body Font</label>
                <select name = "fonts" id="bFont">
                    <option>Arial</option>
                    <option>Helvetica</option>
                    <option>Verdana</option>
                    <option>Geneva</option>
                    <option>Tahoma</option>
                    <option>Trebuchet MS</option>
                </select><br>

                <br><br><br>
            </div>
            </div>
            <input type="submit" id="submit-button">
        </form>
        <input type="button" class="button" id="sample" value="See Sample">

        <script src="index.js"></script>
    </body>
</html>
</div>
