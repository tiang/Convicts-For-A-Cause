using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Convicts_For_A_Cause
{
    /// <summary>
    /// Provide CRUD methods for interacting with convicts table.
    /// </summary>
    public class convictsHelper
    {

        public static ConvictReturnObject registerTeamConvict(string email, string name, string registrationType)
        {
            ConvictsContext db = new ConvictsContext();

            Convict convict = new Convict();
            convict.Email = email;
            convict.Name = name;
            convict.TeamType = registrationType;
            convict.ConvictCode = Helper.GenerateConvictCode();
            convict.ModifiedDate = DateTime.Now;
            convict.Total = "0";

            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    convict.CreateDate = DateTime.Now;
                    convict.TeamCode = Helper.GenerateTeamCode();

                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    convict.TeamCode = found.TeamCode;
                    db.Entry(found).CurrentValues.SetValues(convict);
                    db.SaveChanges();
                }

                returnStatus = "true";
            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message;
            }
          

            ConvictReturnObject returnobj = new ConvictReturnObject();
            returnobj.status = returnStatus;
            returnobj.errorMessage = errorMessage;
            returnobj.convict = convict;
            return returnobj;
        }

        public static ConvictReturnObject registerTeamMember(string email, string name, string registrationType, string teamCode)
        {
            ConvictsContext db = new ConvictsContext();

            Convict convict = new Convict();
            convict.Email = email;
            convict.Name = name;
            convict.TeamType = registrationType;
            convict.TeamCode = teamCode;
            convict.ConvictCode = Helper.GenerateConvictCode();
            convict.ModifiedDate = DateTime.Now;
            convict.Total = "0";

            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    convict.CreateDate = DateTime.Now;
                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    db.Entry(found).CurrentValues.SetValues(convict);
                    db.SaveChanges();
                }

                returnStatus = "true";
            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message;
            }


            ConvictReturnObject returnobj = new ConvictReturnObject();
            returnobj.status = returnStatus;
            returnobj.errorMessage = errorMessage;
            returnobj.convict = convict;
            return returnobj;
        }



        public static TeamDTO registerTeam(string teamCode, string name, string registrationType)
        {
            ConvictsContext db = new ConvictsContext();

            Team team = new Team();
            team.TeamCode = teamCode;
            team.TeamName = name;
            team.TeamType = registrationType;
            team.ModifiedDate = DateTime.Now;
            team.Total = "0";

            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Team found = db.Teams.Find(teamCode);
                if (found == null)
                {
                    team.CreateDate = DateTime.Now;

                    db.Teams.Add(team);
                    db.SaveChanges();
                }
                else
                {
                    db.Entry(found).CurrentValues.SetValues(team);
                    db.SaveChanges();
                }

                returnStatus = "true";
            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message;
            }


            TeamDTO returnobj = new TeamDTO();
            returnobj.status = returnStatus;
            returnobj.errorMessage = errorMessage;
            returnobj.team  = team ;
            return returnobj;
        }

        public static ConvictReturnObject registerConvict(string email, string name)
        {
            ConvictsContext db = new ConvictsContext();

            Convict convict = new Convict();
            convict.Email = email;
            convict.Name = name;
            convict.ConvictCode = Helper.GenerateConvictCode();
            convict.ModifiedDate = DateTime.Now;
            convict.Total = "0";

            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    convict.CreateDate = DateTime.Now;

                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    db.Entry(found).CurrentValues.SetValues(convict);
                    db.SaveChanges();
                }

                returnStatus = "true";
            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message;
            }

            ConvictReturnObject returnobj = new ConvictReturnObject();
            returnobj.status = returnStatus;
            returnobj.errorMessage = errorMessage;
            returnobj.convict = convict;

            return returnobj;
        }

    }
}