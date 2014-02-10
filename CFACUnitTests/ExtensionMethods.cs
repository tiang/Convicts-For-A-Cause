using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NSubstitute;

namespace CFACUnitTests
{
    public static class ExtentionMethods
    {
        /// <summary>
        /// Taken from http://stackoverflow.com/questions/21069986/nsubstitute-dbset-iqueryablet
        /// 
        /// Extension method to initialise a Dataset for Mocking
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dbSet"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static IDbSet<T> Initialize<T>(this IDbSet<T> dbSet, IQueryable<T> data) where T : class
        {
            dbSet.Provider.Returns(data.Provider);
            dbSet.Expression.Returns(data.Expression);
            dbSet.ElementType.Returns(data.ElementType);
            dbSet.GetEnumerator().Returns(data.GetEnumerator());
            return dbSet;
        }
    }
}
