using Microsoft.EntityFrameworkCore;

namespace petshop.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) :  base(options) {}
}