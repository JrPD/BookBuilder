//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MvcApplication1.DbModels
{
    using System;
    using System.Collections.Generic;
    
    public partial class Projects
    {
        public Projects()
        {
            this.Documents = new HashSet<Document>();
        }
    
        public int Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public string UserLogin { get; set; }
        public string Path { get; set; }
        public System.DateTime Date { get; set; }
        public string Settings { get; set; }
    
        public virtual ICollection<Document> Documents { get; set; }
        public virtual UserProfile UserProfile { get; set; }
    }
}
