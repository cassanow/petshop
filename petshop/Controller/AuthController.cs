using Microsoft.AspNetCore.Mvc;
using petshop.DTO;
using petshop.Model;
using petshop.Repository;
using petshop.Service;

namespace petshop.Controller;

[Route("api/[controller]")]
[ApiController]
public class AuthController : Microsoft.AspNetCore.Mvc.Controller
{
    private readonly IUserRepository _repository;
    private readonly IPasswordService _passwordService;

    public AuthController(IUserRepository repository, IPasswordService passwordService)
    {
        _repository = repository;
        _passwordService = passwordService;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO login)
    {
        var user = await _repository.GetByEmail(login.Email);
        
        if (user == null)
            return Unauthorized();
        
        var valid = _passwordService.VerifyPassword(user.Password, login.Password);
        
        if (!valid)
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
            Password = _passwordService.HashPassword(user.Password),
            Name = user.Name,
            Telefone = user.Telefone,
        };
        
        await _repository.Create(response);
        return Ok(user);
    }
}