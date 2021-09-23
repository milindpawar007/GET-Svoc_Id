const getCookie = (cname) => {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while(c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if(c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		};
		const extractUserInfo = function() {
			return atob( JSON.parse((getCookie("THD_USER"))));
		};const info =JSON.parse(extractUserInfo());
						if(info) {
							svoc_id = info['svocCustomerAccountId'];
						}
