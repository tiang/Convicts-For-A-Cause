using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Text;

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
            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    
                    convict.Email = email;
                    convict.Name = name;
                    convict.ModifiedDate = DateTime.Now;
                    convict.Total = "0";
                    convict.CreateDate = DateTime.Now;                    
                    convict.TeamType = registrationType;                    
                    convict.Total = "0";
                    convict.TeamCode = Helper.GenerateTeamCode();
                    convict.ConvictCode = Helper.GenerateConvictCode();

                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    convict = found;
                    convict.ModifiedDate = DateTime.Now;            
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
         
            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    convict.Email = email;
                    convict.Name = name;
                    convict.TeamType = registrationType;
                    convict.TeamCode = teamCode;
                    convict.ConvictCode = Helper.GenerateConvictCode();
                    convict.ModifiedDate = DateTime.Now;
                    convict.Total = "0";
                    convict.CreateDate = DateTime.Now;
                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    convict.ModifiedDate = DateTime.Now;
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


            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                Team found = db.Teams.Find(teamCode);
                if (found == null)
                {
                    team.TeamCode = teamCode;
                    team.TeamName = name;
                    team.TeamType = registrationType;
                    team.ModifiedDate = DateTime.Now;
                    team.Total = "0";
                    team.CreateDate = DateTime.Now;

                    db.Teams.Add(team);
                    db.SaveChanges();
                }
                else
                {
                    team = found;
                    team.ModifiedDate = DateTime.Now;
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

        public static bool doesAccountExist(string email)
        {
            ConvictsContext db = new ConvictsContext();
            bool doesAccountExist = false;
            string errorMessage = "";
            Convict convict = new Convict();
            try
            {
                Convict found = db.Convicts.Find(email);
                if (found != null)
                {
                    doesAccountExist = true;
                }
            }
            catch (Exception ex)
            {
                doesAccountExist = false;
                errorMessage = ex.Message;
            }

            return doesAccountExist;
        }


        public static ConvictReturnObject registerConvict(string email, string name)
        {
            ConvictsContext db = new ConvictsContext();
            
            

            string returnStatus = "false";
            string errorMessage = "";
            Convict convict = new Convict(); 
            try
            {
                Convict found = db.Convicts.Find(email);
                if (found == null)
                {
                    convict = new Convict();
                    convict.Email = email;
                    convict.Name = name;
                    convict.ModifiedDate = DateTime.Now;
                    convict.Total = "0";
                    convict.CreateDate = DateTime.Now;
                    convict.ConvictCode = Helper.GenerateConvictCode();
                    db.Convicts.Add(convict);
                    db.SaveChanges();
                }
                else
                {
                    convict = found;
                    convict.ModifiedDate = DateTime.Now;                    
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