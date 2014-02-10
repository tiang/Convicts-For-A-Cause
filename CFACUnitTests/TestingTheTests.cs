using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using Convicts_For_A_Cause;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Collections.Generic;

namespace CFACUnitTests
{
    [TestClass]
    public class TestingTheTests
    {
        /// <summary>
        /// Taken from http://romiller.com/2010/09/07/ef-ctp4-tips-tricks-testing-with-fake-dbcontext/
        /// 
        /// We are just mocking the DBSet. But not creating any data content 
        /// </summary>
        [TestMethod]
        public void can_mock_empty_convict_context()
        {
            /// Arrange Objects:            
            var context = Substitute.For<IConvictsContext>();

            context.Convicts.Returns(new Mocks.FakeDbSet<Convict>());

            context.Convicts.Add(new Convict());

            Assert.AreEqual(1, context.Convicts.Count());
        }

        /// <summary>
        /// Taken from http://stackoverflow.com/questions/21069986/nsubstitute-dbset-iqueryablet
        /// 
        /// We can insert our own data, like Convicts, Team, and Payments using this method:
        /// </summary>
        [TestMethod]
        public void can_mock_convict_context()
        {
            /// Arrange Objects:            
        

            var convict = new List<Convict> { 
                new Convict { ConvictCode = "1234", 
                                Email = "tiangc@gmail.com"
                },
                new Convict { ConvictCode = "1233", 
                                Email = "tiang@gmail.com"
                },
                new Convict { ConvictCode = "1232", 
                                Email = "tiang1@gmail.com"
                }
            }.AsQueryable();

            var mockSet = Substitute.For<IDbSet<Convict>>().Initialize(convict);
            var context = Substitute.For<IConvictsContext>();
            context.Convicts.Returns(mockSet);

            Assert.AreEqual(3, context.Convicts.Count());
            Assert.AreEqual("1234", context.Convicts.First().ConvictCode);
        }

        [TestMethod]
        public void can_mock_convict_context_SpeedTest()
        {
            /// Arrange Objects:            


            var convicts = new List<Convict> { 
                new Convict { ConvictCode = "1234", 
                                Email = "tiangc@gmail.com"
                },
                new Convict { ConvictCode = "1233", 
                                Email = "tiang@gmail.com"
                },
                new Convict { ConvictCode = "1232", 
                                Email = "tiang1@gmail.com"
                }
            }.AsQueryable();

            var mockSet = Substitute.For<IDbSet<Convict>>();
            mockSet.Provider.Returns(convicts.Provider);
            mockSet.Expression.Returns(convicts.Expression);
            mockSet.ElementType.Returns(convicts.ElementType);
            mockSet.GetEnumerator().Returns(convicts.GetEnumerator());
            
            var context = Substitute.For<IConvictsContext>();
            context.Convicts.Returns(mockSet);

            Assert.AreEqual(3, context.Convicts.Count());
            Assert.AreEqual("1234", context.Convicts.First().ConvictCode);
        }
    }
}
