using Microsoft.AspNetCore.Mvc;
using petshop.DTO;
using petshop.Model;
using petshop.Repository;

namespace petshop.Controller;

[Route("api/[controller]")]
[ApiController]
public class AuthController : Microsoft.AspNetCore.Mvc.Controller
{
    private readonly IUserRepository _repository;

    public AuthController(IUserRepository repository)
    {
        _repository = repository;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO login)
    {
        var user = await _repository.GetByEmail(login.Email);
        
        if (user == null)
            return Unauthorized();
        
        if(user.Password != login.Password && user.Email != login.Email)
            return Unauthorized();
        
        return Ok(user);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserDTO user)
    {
        if(!ModelState.IsValid)
            return BadRequest();

        var response = new User
        {
            Email = user.Email,
            Password = user.Password,
            Name = user.Name,
            Telefone = user.Telefone,
        };
        
        await _repository.Create(response);
        return Ok(user);
    }
}