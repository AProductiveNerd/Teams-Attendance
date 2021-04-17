setTimeout(function myfunction() {
	setTimeout(function myanotherfunctoin() {
		var button = document.getElementsByClassName(
			"node_modules--msteams-bridges-components-calendar-event-card-dist-es-src-renderers-event-card-renderer-event-card-renderer__joinButton--1AeXc node_modules--msteams-bridges-components-calendar-event-card-dist-es-src-renderers-event-card-renderer-event-card-renderer__activeCall--25Ch-"
		);
		button[0].click();
		setTimeout(function waitOutFunction() {
			var joinbutton = document.getElementsByClassName("join-btn");
			joinbutton[0].click();
			var markOrNot = confirm("Mark the attendance?");

			if (markOrNot === true) {
				setTimeout(function wowFunction() {
					document.getElementById("chat-button").click();
					setTimeout(function mynewfunction() {
						var parent = document.getElementsByClassName(
							"cke_contents"
						);
						parent[0].children[0].innerText =
							"<Your Message to put in the chat>";

						//document.getElementById("send-message-button").click();
						console.log("Marked the attendance");
					}, 3000);
				}, 3000);
			}
		}, 3000);
	}, 3000);
}, 3000);
