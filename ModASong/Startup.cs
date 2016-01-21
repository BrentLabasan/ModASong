using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ModASong.Startup))]
namespace ModASong
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
