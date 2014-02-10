using System;
namespace Convicts_For_A_Cause
{
    interface IConvictsHelper
    {
        ConvictReturnObject registerTeamConvict(string email, string name, string registrationType);
    }
}
