using System;
using System.ComponentModel.DataAnnotations;

namespace TampaBay.Models

{
    public class Review
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BestWorst { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;
        public int UserId { get; set; }
        public int EventId { get; set; }

        public User User { get; set; }
    }
}