using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using petshop.Data;

namespace petshop.Service;

public class PasswordService : IPasswordService
{
    private readonly Random _random =  new Random();
    private readonly AppDbContext _context;

    public PasswordService(AppDbContext context)
    {
        _context = context;
    }
    
    public string HashPassword(string password)  
    {  
        var salt = RandomNumberGenerator.GetBytes(128/8);  
        var hashed =  Convert.ToBase64String(KeyDerivation.Pbkdf2(  
            password: password!,  
            salt:  salt,  
            prf: KeyDerivationPrf.HMACSHA1,  
            iterationCount: 10000,    
            numBytesRequested: 256 / 8  
        ));  
  
        return $"{Convert.ToBase64String(salt)}:{hashed}";  
    }  
  
    public bool VerifyPassword(string hashedPassword, string password)  
    {  
        var parts = hashedPassword.Split(':');  
        if (parts.Length != 2)   
            return false;  
        var salt = Convert.FromBase64String(parts[0]);  
        var savedHash = parts[1];  
  
        var computedHash = Convert.ToBase64String(KeyDerivation.Pbkdf2(  
            password: password!,  
            salt:  salt,  
            prf: KeyDerivationPrf.HMACSHA1,  
            iterationCount: 10000,  
            numBytesRequested: 256 / 8));  
  
        return savedHash == computedHash;  
    }
}