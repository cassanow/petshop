using petshop.Model;

namespace petshop.Repository;

public interface IUserRepository
{
    Task<List<User>> GetAll();
    
    Task<User> GetById(int id);
    
    Task<User> GetByEmail(string email);
    
    Task<bool> Create(User user);
    
    Task<bool> Update(User user);
    
    Task<bool> Delete(User user);
}