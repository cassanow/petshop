using petshop.Model;

namespace petshop.Service;

public interface ITokenService
{
    string GenerateToken(User user);
}