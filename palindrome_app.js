<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<title>Check Palindrome with JavaScript Program</title>
	<style>
		input{
			padding: 10px;			
		}
	</style>
	<script>
		
		function myFunction()
		{
			//get the value from textbox
			var str = document.getElementById('txtbox').value;
			
			//call checkPalindrome() and pass str
			var result = checkPalindrome(str);
			alert('The Entered String "'+str +'" is "'+result+'"');
		}
		
		function checkPalindrome(str)
		{
			var orignalStr;
			 
			//lowercase the string 
			str = str.toLowerCase();
			
			//store the str in orignalStr for future use
			orignalStr = str;
			
			//reverse the entered string
			str = str.split(''); //split the entered string 
			str = str.reverse(); //reverse the order 
			str = str.join(''); //then join the reverse order array values
			
			var reverseStr = str;
			
			//finally check both the Original string stored in orignalStr
			//and reversed to find the palindrom			
			if(orignalStr == reverseStr){
				return 'Palindrome'; // return "Palindrome" if true
			}else{
				return 'Not Palindrome';
			}
		}
	</script>
</head>
<body>
	<form action="http://www.ericwashington.me" method="get">
		<input type="text" id="txtbox" placeholder="Enter a 'String'" />
		<input type="button" onclick="myFunction()" value="Check Palindrome" />
	</form>
</body>
</html>