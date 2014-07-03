angular.module("directives.employerSearchTokenizerDirective", []).directive(
		'employerSearchTokenizer', function() {

			return {
				restrict : 'EAC',
				replace : true,

				link : function(scope, element, attrs) {

					// reset input field dirty and valid values
					// eval("scope."+attrs.propertyName + ".dirty = false");

//					var tokenInput = document.createElement("input");
//					tokenInput.type = "text";
//					tokenInput.className = "form-control";
//					tokenInput.id = "tokenfield";
//					tokenInput.value = "test";
					var myHelloElement = document.createElement("div");
					myHelloElement.innerHTML = "Hello Everyone.  I should be a cool employer search directive.  Instead, I'm just this disappointing text";
					element.replaceWith(myHelloElement);

//					var prePopulate = eval("scope."+attrs.propertyName); 
//
//					if (prePopulate && prePopulate.length > 0) {
//						$(tokenInput).tokenInput(attrs.url, {
//							theme : "facebook",
//							onAdd : function(item) {
//								eval("scope."+attrs.propertyName + ".push(item);");
//								
//								scope.$apply();
//							},
//							onDelete : function(item) {
//								var i = eval("scope."+attrs.propertyName + ".indexOf(item);");
//								if(i != -1)
//								{
//									eval("scope."+attrs.propertyName + ".splice(i,1);");
//								}
//								scope.$apply();
//							},
//							tokenLimit : attrs.allowedTokens,
//							prePopulate : prePopulate
//						});
//					} else {
//						$(tokenInput).tokenInput(attrs.url, {
//							theme : "facebook",
//							onAdd : function(item) {
//								
//								eval("scope."+attrs.propertyName + ".push(item);");
//								
//								scope.$apply();
//							},
//							onDelete : function(item) {
//								
//								
//								var i = eval("scope."+attrs.propertyName + ".indexOf(item);");
//								if(i != -1)
//								{
//									eval("scope."+attrs.propertyName + ".splice(i,1);");
//								}
//								scope.$apply();
//							},
//							tokenLimit : attrs.allowedTokens
//						});
//					}
//					$("ul.token-input-list-facebook").css("width","650px");
				}
			};

		});
