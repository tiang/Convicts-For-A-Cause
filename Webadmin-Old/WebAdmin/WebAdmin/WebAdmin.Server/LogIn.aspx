<%@ Page Language="C#" %>

<!-- ================================================= -->
<!-- Login form that is LightSwitch 2013 compatible -->
<!-- Easily integrate with any public facing web site -->
<!-- ================================================= -->

<!DOCTYPE HTML>
<html>
<head>
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
	<title>Log In</title>
	
	<link rel="stylesheet" type="text/css" href="/Content/Aspx.css" />

</head>
<body>
    <form id="LogInForm" runat="server">
        <asp:Login ID="LoginUser" runat="server" EnableViewState="false" RenderOuterTable="false">
            <LayoutTemplate>
                <div class="accountInfo">
                    <h1>Log In</h1>
                    <div style="margin-bottom: 20px;">
                        <asp:Label ID="UsernameLabel" runat="server" AssociatedControlID="Username" CssClass="labelStyle" >User Name</asp:Label>
                        <asp:RequiredFieldValidator ID="UsernameRequired" runat="server" ControlToValidate="Username" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Username is required" CssClass="requiredStyle" />
                        <asp:TextBox ID="Username" runat="server" CssClass="textBoxStyle" />
                    </div>
                    <div style="margin-bottom: 20px;">
                        <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password" CssClass="labelStyle" >Password</asp:Label>
                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Password is required" CssClass="requiredStyle" />
                        <asp:TextBox ID="Password" runat="server" TextMode="Password" CssClass="textBoxStyle" />
                    </div>
                    <div class="submit-login">
                        <div class="rememberme">
	                        <asp:CheckBox ID="RememberMe" runat="server" Text=" Remember me next time" CssClass="checkStyle" />
                        </div>
	                    <div style="margin-bottom: 10px;">
		                    <asp:Button ID="LoginButton" runat="server" CommandName="Login" ValidationGroup="LoginUserValidationGroup" Text="LOG IN" CssClass="buttonStyle" />
	                    </div>
                    </div>
                    <span class="failureNotification">
                        <asp:Literal ID="FailureText" runat="server" />
                    </span>
                    <asp:ValidationSummary ID="LoginUserValidationSummary" runat="server" ValidationGroup="LoginUserValidationGroup" />
                </div>
            </LayoutTemplate>
        </asp:Login>
    </form>
</body>
</html>
