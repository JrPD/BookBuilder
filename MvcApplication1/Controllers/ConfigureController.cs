﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplication1.DbModels;
using MvcApplication1.Filters;
using NLog.Fluent;

namespace MvcApplication1.Controllers
{
    public class ConfigureController : Controller
    {
        private Entities db = MvcApplication.RepoContext;
        public NLog.Logger Log = MvcApplication.logger;

        public ActionResult Index(int id)
        {
            if (!MvcApplication.WebSecurity.CheckUserLogin("/Configure/Index"))
                RedirectToAction("Login", "account");

            ViewBag.Message = "Configuration Page";
            Log.Info("Open configuration page from {0} at {1}", MvcApplication.WebSecurity.ControllerContext.HttpContext.Request.Cookies["UserLogin"].Value, DateTime.Now);

            Projects project = db.Projects.Find(id);

            if (project != null)
            {
                ViewBag.path = @"~\Files\" + project.UserLogin + @"\" + project.Path;
                var directory = new DirectoryInfo(Server.MapPath(ViewBag.path));

                if (!directory.Exists)
                {
                    return RedirectToAction("Index", "Dashboard");
                }

                ViewBag.files = directory.GetFiles().ToList();
                ViewBag.subDirectoryList = directory.GetDirectories().ToList();
               
                return View(project);

            }
            return RedirectToAction("ProjectsList", "Project");

        }

    }
}
