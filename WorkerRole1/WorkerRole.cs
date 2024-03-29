﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using Microsoft.WindowsAzure.StorageClient;
using Convicts_For_A_Cause;
using System.Data.Entity;
namespace Leaderboard
{
    public class WorkerRole : RoleEntryPoint
    {
        public override void Run()
        {
            // This is a sample worker implementation. Replace with your logic.
            Trace.WriteLine("WorkerRole1 entry point called", "Information");

            // Disables EntityFramework Code First checks
            Database.SetInitializer<ConvictsContext>(null);

            while (true)
            {
                try
                {
                    
                    Helper h = new Helper();
                    h.CalculateConvictTotals();        
                    h.getDonorNames();
                    h.getPaymentRecords();
                    h.SanitiseDatabaseQuotes();
                    h.getConvictURLS();
                    h.getTeamURLS();
                    h.CalculateTeamTotals();
                    h.addTeamCodeToPaymentRecords();
                   
                    Thread.Sleep(60000); //5 minutes
                }
                catch (Exception ex)
                {
                    Console.Write(ex.Message.ToString()); 
                    //throw; 
                }
                System.Threading.Thread.Sleep(1000 * 60);
            }
        }

        public override bool OnStart()
        {
            // Set the maximum number of concurrent connections 
            ServicePointManager.DefaultConnectionLimit = 12;

            // For information on handling configuration changes
            // see the MSDN topic at http://go.microsoft.com/fwlink/?LinkId=166357.

            return base.OnStart();
        }
    }
}
