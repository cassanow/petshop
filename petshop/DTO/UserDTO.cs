using System.ComponentModel.DataAnnotations;

namespace petshop.DTO;

public class UserDTO
{
    [Required]
    [MaxLength(200)]
    public string Name { get; set; }
    
    [EmailAddress]
    [Required]
    public string Email { get; set; }
    
    [Required]
    [MaxLength(11)]
    [MinLength(11)]
    public string Telefone { get; set; } 
    
    [Required]
    [MaxLength(100)]
    [MinLength(6)]
    public string Password { get; set; }    
}