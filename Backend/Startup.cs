using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlTypes;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Newtonsoft.Json;


namespace GraceSLP
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
<<<<<<< HEAD
            var connectionString = "Server=localhost; Database=GraceSLP; Uid=postgres; Pwd=postgres;";
=======
<<<<<<< HEAD
            var connectionString = "Server=localhost; Database=GraceSLP; Uid=postgres; Pwd=postgres;";
=======
            var connectionString = "Server=localhost; Database=GraceSLP; Uid=postgres; Pwd=password;";
>>>>>>> ddd82baeb250ac6fe8765561bb66d7ad9f82273b
>>>>>>> 3058e273af985c0a293e659f3056fbeee5ea94ef
            services.AddEntityFrameworkNpgsql().AddDbContext<InfoContext> (opt => opt.UseNpgsql(connectionString));
            services.AddCors();
            services.AddMvc().AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseMvc();
        }
    }
}
