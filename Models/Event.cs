using System.ComponentModel.DataAnnotations;

namespace TampaBay.Models

{
    public class Event
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Requirements { get; set; }

        [Required]
        public string Category { get; set; }
        public int Cost { get; set; }
        public string Address { get; set; }

    }
}