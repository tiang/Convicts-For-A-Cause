<%@ Page Language="C#" %>

<!-- ================================================= -->
<!-- Self registration form that is LightSwitch 2013 compatible -->
<!-- Easily integrate with any public facing web site -->
<!-- ================================================= -->

<!DOCTYPE HTML>
<html>
<head>
	<meta name="HandheldFriendly" content="true" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
	<title>Register</title>
	
	<link rel="stylesheet" type="text/css" href="/Content/Aspx.css" />

</head>
<body>
	<form id="RegisterForm" runat="server">
		<div class="accountInfo">
			<h1>Register</h1>
			<asp:CreateUserWizard ID="CreateUserWizard" runat="server" 
			                      ContinueDestinationPageUrl="/App/default.htm" 
			                      LoginCreatedUser="True" 
			                      CreateUserButtonText="Register" 
			                      CreateUserButtonStyle-CssClass="buttonStyle" 
			                      CancelButtonText="Cancel"
			                      CancelButtonStyle-CssClass="buttonStyle"
			                      CancelDestinationPageUrl="/App/default.htm"
			                      DisplayCancelButton="true"
			                      ContinueButtonStyle-CssClass="buttonStyle"
				>
				<WizardSteps>
					<asp:CreateUserWizardStep ID="CreateUserWizardStep" runat="server">
						<ContentTemplate>
							<!-- UserName -->
							<div>
								<asp:Label runat="server" ID="UserNameLabel" class="labelStyle" AssociatedControlID="UserName">User Name</asp:Label>
								<div class="controls">
									<asp:TextBox ID="UserName" CssClass="textBoxStyle" name="UserName" runat="server"></asp:TextBox>
									<asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName"
										ErrorMessage="User Name is required." ToolTip="User Name is required."
										ValidationGroup="CreateUserWizard" CssClass="requiredStyle">User name is required</asp:RequiredFieldValidator>
								</div>
							</div>
							<!-- Password -->
							<div>
								<asp:Label runat="server" ID="PasswordLabel" class="labelStyle" AssociatedControlID="Password">Password</asp:Label>
								<div class="controls">
									<asp:TextBox TextMode="Password" ID="Password" CssClass="textBoxStyle" name="Password" runat="server"></asp:TextBox>
									<asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password"
										ErrorMessage="Password is required." ToolTip="Password is required."
										ValidationGroup="CreateUserWizard" CssClass="requiredStyle">Password is required</asp:RequiredFieldValidator>
								</div>
							</div>
							<!-- Confirm Password -->
							<div>
								<asp:Label runat="server" ID="ConfirmPasswordLabel" class="labelStyle" AssociatedControlID="ConfirmPassword">Confirm Password</asp:Label>
								<div class="controls">
									<asp:TextBox TextMode="Password" ID="ConfirmPassword" CssClass="textBoxStyle" name="ConfirmPassword" runat="server"></asp:TextBox>
									<asp:RequiredFieldValidator ID="ConfirmPasswordRequired" runat="server" ControlToValidate="ConfirmPassword"
										ErrorMessage="Confirm Password is required." ToolTip="Confirm Password is required."
										ValidationGroup="CreateUserWizard" CssClass="requiredStyle">Confirm password is required</asp:RequiredFieldValidator>
								</div>
							</div>
							<!-- Email -->
							<div>
								<asp:Label runat="server" ID="EmailLabel" class="labelStyle" AssociatedControlID="Email">Email</asp:Label>
								<div class="controls">
									<asp:TextBox ID="Email" CssClass="textBoxStyle" name="Email" runat="server"></asp:TextBox>
									<asp:RequiredFieldValidator ID="EmailRequired" runat="server" ControlToValidate="Email"
										ErrorMessage="Email is required." ToolTip="Email is required."
										ValidationGroup="CreateUserWizard" CssClass="requiredStyle">Email is required</asp:RequiredFieldValidator>
								</div>
							</div>
							<!-- Stuff -->
							<div>
								<div class="controls" style="color: red;">
									<asp:Literal ID="ErrorMessage" runat="server" EnableViewState="False"></asp:Literal>
									<asp:CompareValidator ID="PasswordCompare" runat="server" ControlToCompare="Password"
										ControlToValidate="ConfirmPassword" Display="Dynamic"
										ErrorMessage="The Password and Confirmation Password must match."
										ValidationGroup="CreateUserWizard" CssClass="requiredStyle">The Password and Confirmation Password must match<br /></asp:CompareValidator>

								</div>
							</div>

							<!-- Checkbox -->
							<div>
								<div class="controls">
									<asp:Label runat="server" class="checkbox inline">
										<asp:CheckBox ID="inlineCheckbox1" value="agree" runat="server" />
										Agree with Terms and Conditions<br /><br />
									</asp:Label>
									
								</div>
							</div>
						</ContentTemplate>
					</asp:CreateUserWizardStep>
					<asp:CompleteWizardStep ID="CompleteWizardStep" runat="server">
					</asp:CompleteWizardStep>
				</WizardSteps>
			</asp:CreateUserWizard>
		</div>
	</form>

</body>
</html>
