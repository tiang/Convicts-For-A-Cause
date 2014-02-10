using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CFACUnitTests
{
    class Mocks
    {
        /// <summary>
        /// Taken from http://romiller.com/2010/09/07/ef-ctp4-tips-tricks-testing-with-fake-dbcontext/
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public class FakeDbSet<T> : IDbSet<T>
             where T : class
        {
            HashSet<T> _data;
            IQueryable _query;

            public FakeDbSet()
            {
                _data = new HashSet<T>();
                _query = _data.AsQueryable();
            }

            public virtual T Find(params object[] keyValues)
            {
                throw new NotImplementedException("Derive from FakeDbSet<T> and override Find");
            }

            public void Add(T item)
            {
                _data.Add(item);
            }

            public void Remove(T item)
            {
                _data.Remove(item);
            }

            public void Attach(T item)
            {
                _data.Add(item);
            }

            public void Detach(T item)
            {
                _data.Remove(item);
            }

            Type IQueryable.ElementType
            {
                get { return _query.ElementType; }
            }

            System.Linq.Expressions.Expression IQueryable.Expression
            {
                get { return _query.Expression; }
            }

            IQueryProvider IQueryable.Provider
            {
                get { return _query.Provider; }
            }

            System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
            {
                return _data.GetEnumerator();
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator()
            {
                return _data.GetEnumerator();
            }

            T IDbSet<T>.Add(T entity)
            {
                _data.Add(entity);
                return entity;
            }

            T IDbSet<T>.Attach(T entity)
            {
                throw new NotImplementedException();
            }

            TDerivedEntity IDbSet<T>.Create<TDerivedEntity>()
            {
                throw new NotImplementedException();
            }

            T IDbSet<T>.Create()
            {
                throw new NotImplementedException();
            }

            T IDbSet<T>.Find(params object[] keyValues)
            {
                throw new NotImplementedException();
            }

            System.Collections.ObjectModel.ObservableCollection<T> IDbSet<T>.Local
            {
                get { throw new NotImplementedException(); }
            }

            T IDbSet<T>.Remove(T entity)
            {
                _data.Remove(entity);
                return entity;
            }
        }

        #region Not used
        /*
        ///Taken from http://romiller.com/2010/09/07/ef-ctp4-tips-tricks-testing-with-fake-dbcontext/
        
        public class FakeConvictSet : FakeDbSet<Convict>
        {
            public override Convict Find(params object[] keyValues)
            {
                return this.SingleOrDefault(d => d.ConvictCode == (string)keyValues.Single());
            }
        }
        public class FakeTeamSet : FakeDbSet<Team>
        {
            public override Team Find(params object[] keyValues)
            {
                return this.SingleOrDefault(d => d.TeamCode == (string)keyValues.Single());
            }
        }
        public class FakePaymentRecordSet : FakeDbSet<PaymentRecord>
        {
            public override PaymentRecord Find(params object[] keyValues)
            {
                return this.SingleOrDefault(d => d.paymentID == (int)keyValues.Single());
            }
        }

        public class FakeConvictContext 
        {
            public IDbSet<FakeConvictSet> Convicts { get; set; }
            public IDbSet<FakePaymentRecordSet> Payments { get; set; }
            public IDbSet<FakeTeamSet> Teams { get; set; }


        }
        
        */
        #endregion

    }
}
