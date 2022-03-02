javascript:
	var txt = prompt("Say something to Bill!");
	document.write("<h3>" + txt + "</h3>");
	var time = Math.floor(Math.random() * 3500);
	setTimeout(function() {
		if(txt.indexOf('joe') >= 0){
			var answer = Array("joe mama");
			} else {
				if(txt.indexOf('candice') >= 0){
					var answer = Array("candice nuts fit in your mouth");
					} else {
						if (txt.indexOf('who') >= 0) {
							var answer = Array("Evan", "Alex", "Jimmy", "Kanye West", "Corbin", "Joe", "Candice", "Zach", "Zander", "Tyler", "Your mother", "Donald Trump", "God", "You", "Not you", "Your dad");
							} else {
								if(txt.indexOf('when') >= 0) {
									var answer = Array("in 100 years", "never", "in 10 days", "tommarow", "next week", "next month", "in 666 days", "in 69 days", "in 420 hours");
									} else {
										if(txt.indexOf('why') >= 0){
											var answer = Array("because your mom", "because god is dead", "because your emo", "because your stupid", "because your dumb", "because your mom dropped you when you were a baby");
											} else {
												if(txt.indexOf('were') >= 0){
													var answer = Array("your mom's house", "your dad's house", "in hell", "in heaven", "behind you", "in mexico");
													} else {
														var answer = Array("yes", "yes", "yes", "no", "no", "no", "shut up", "Hahaha", "100%", "seriosly?", "no you");
								};				
							};
						};			
					};
				};
			};
		var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
		document.write("<h3 style='color:blue'>" + randomAnswer + "</h3>");
	}, time);
