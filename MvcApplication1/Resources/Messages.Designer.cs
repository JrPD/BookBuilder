﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MvcApplication1.Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Messages {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Messages() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("MvcApplication1.Resources.Messages", typeof(Messages).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Your mail or password is incorrect, please check it again..
        /// </summary>
        internal static string Account_Login_InCorrectModel {
            get {
                return ResourceManager.GetString("Account_Login_InCorrectModel", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Sorry, you must enter login between 6 and 30 symbols.
        /// </summary>
        internal static string RegisterModel_UserLogin_Length {
            get {
                return ResourceManager.GetString("RegisterModel_UserLogin_Length", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Please enter enother, more shortly e-mail..
        /// </summary>
        internal static string RegisterModel_UserMail_Length {
            get {
                return ResourceManager.GetString("RegisterModel_UserMail_Length", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Your passwords don&apos;t compareble.
        /// </summary>
        internal static string RegisterModel_UserPass_Compare {
            get {
                return ResourceManager.GetString("RegisterModel_UserPass_Compare", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Please enter at last 6 symbols.
        /// </summary>
        internal static string RegisterModel_UserPass_Length {
            get {
                return ResourceManager.GetString("RegisterModel_UserPass_Length", resourceCulture);
            }
        }
    }
}
