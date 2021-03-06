﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplication1.DbModels;
using MvcApplication1.Filters;

namespace MvcApplication1.Controllers
{
    //todo видалити коли будуть готові інші сторінки
    [Authorize]
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            if (!MvcApplication.WebSecurity.CheckUserLogin("/Dashboard/Index"))
                RedirectToAction("Login", "Account");
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";
            return View();
        }

        [HttpGet]
        public ActionResult About()
        {
            if (!MvcApplication.WebSecurity.CheckUserLogin("/Dashboard/Index"))
                RedirectToAction("Login", "Account");
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            if (!MvcApplication.WebSecurity.CheckUserLogin("/Dashboard/Index"))
                RedirectToAction("Login", "Account");
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
