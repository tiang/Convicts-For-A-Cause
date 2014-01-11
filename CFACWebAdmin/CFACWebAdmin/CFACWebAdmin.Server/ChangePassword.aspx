<%@ Page Language="C#" %>

<!-- ================================================= -->
<!-- Change password form that is LightSwitch 2013 compatible -->
<!-- Easily integrate with any public facing web site -->
<!-- ================================================= -->


<script runat="server">
	
	// On load of the page, check to see if there is a user and authenticated
	protected override void OnLoad(EventArgs e)
	{
		// Verify that there is a user, and that the user is authenticated (logged in)
		var isAuthenticated = (HttpContext.Current.User != null) &&
		                      HttpContext.Current.User.Identity.IsAuthenticated;

		// If they are not, no password to change, redirect to login page
		if (!isAuthenticated) HttpContext.Current.Response.Redirect("/Login.aspx");

	}

</script>

<!DOCTYPE HTML>
<html>
<head>
	<meta name="HandheldFriendly" content="true" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
	<title>Change Password</title>

	<link rel="stylesheet" type="text/css" href="/Content/Aspx.css" />

</head>
<body>
	<form id="ChangePasswordForm" runat="server">
		<div class="accountInfo">
			<h1>Change Password</h1>
			<asp:ChangePassword ID="ChangePasswordControl" runat="server" EnableViewState="false" RenderOuterTable="false"
				CancelDestinationPageUrl="/App"
				ContinueDestinationPageUrl="/LogIn.aspx"
				ChangePasswordButtonText="Submit"
				CancelButtonStyle-CssClass="buttonStyle"
				ChangePasswordButtonStyle-CssClass="buttonStyle"
				CancelButtonText="Cancel"
				DisplayUserName="False">

				<ChangePasswordTemplate>
					<!-- Password -->
					<div>
						<asp:Label runat="server" ID="CurrentPasswordLabel" class="labelStyle" AssociatedControlID="CurrentPassword">Current Password</asp:Label>
						<div>
							<asp:TextBox TextMode="Password" ID="CurrentPassword" class="textBoxStyle" name="CurrentPassword" runat="server"></asp:TextBox>
							<asp:RequiredFieldValidator ID="CurrentPasswordRequired" runat="server" ControlToValidate="CurrentPassword"
								ErrorMessage="Current Password is required." ToolTip="Current Password is required."
								ValidationGroup="ChangePasswordControl">*</asp:RequiredFieldValidator>
						</div>
					</div>
					<!-- New Password -->
					<div>
						<asp:Label runat="server" ID="NewPasswordLabel" class="labelStyle" AssociatedControlID="NewPassword">New Password</asp:Label>
						<div>
							<asp:TextBox TextMode="Password" ID="NewPassword" class="textBoxStyle" name="NewPassword" runat="server"></asp:TextBox>
							<asp:RequiredFieldValidator ID="NewPasswordRequired" runat="server" ControlToValidate="NewPassword"
								ErrorMessage="New Password is required." ToolTip="New Password is required."
								ValidationGroup="ChangePasswordControl">*</asp:RequiredFieldValidator>
						</div>
					</div>

					<!-- Confirm New Password -->
					<div>
						<asp:Label runat="server" ID="ConfirmNewPasswordLabel" class="labelStyle" AssociatedControlID="ConfirmNewPassword">Confirm New Password</asp:Label>
						<div>
							<asp:TextBox TextMode="Password" ID="ConfirmNewPassword" class="textBoxStyle" name="ConfirmNewPassword" runat="server"></asp:TextBox>
							<asp:RequiredFieldValidator ID="ConfirmNewPasswordRequired" runat="server" ControlToValidate="ConfirmNewPassword"
								ErrorMessage="Confirm New Password is required." ToolTip="Confirm New Password is required."
								ValidationGroup="ChangePasswordControl">*</asp:RequiredFieldValidator>
						</div>
					</div>
					<div>
						<asp:CompareValidator ID="NewPasswordCompare" runat="server"
							ControlToCompare="NewPassword" ControlToValidate="ConfirmNewPassword"
							Display="Dynamic"
							ErrorMessage="The Confirm New Password must match the New Password entry."
							ValidationGroup="ChangePasswordControl"></asp:CompareValidator>

					</div>

					<asp:ValidationSummary ID="ChangePasswordControlValidationSummary" runat="server" ValidationGroup="ChangePasswordControl" />

					<div class="failureNotification">
						<asp:Literal ID="FailureText" runat="server" />
					</div>
					<asp:Button class="buttonStyle" ID="ChangePasswordButton" runat="server" CommandName="ChangePassword" name="ChangePassword" Text="Change Password" />
					<asp:Button class="buttonStyle" ID="CancelButton" runat="server" CommandName="Cancel" name="Cancel" Text="Cancel" />
				</ChangePasswordTemplate>
				<SuccessTemplate>
					<h3>Success!</h3>
					<br />
					<asp:Button runat="server" class="buttonStyle" ID="Continue" CommandName="Continue" Text="Log back in..."></asp:Button>
				</SuccessTemplate>
			</asp:ChangePassword>
		</div>
	</form>

</body>
</html>
