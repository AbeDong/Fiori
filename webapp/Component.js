jQuery.sap.declare("Northwind.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("Northwind.Component", {
	metadata: {
		"manifest": "json"
	}
});